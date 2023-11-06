import type { Schema } from 'yup';
import { object, ObjectSchema, ref, string } from 'yup';

const regExps = {
  phone: /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/,
};

const messages = {
  required: 'Это поле обязательно',
  email: 'Введите действительный email адрес',
  phone: 'Телефон должен состоять из 11 цифр',
  confirmPassword: 'Пароли должны совпадать',
  min: (field: string, num: number) =>
    `Длина ${field} должна быть не менее ${num} символов`,
  max: (field: string, num: number) =>
    `Длина ${field} должна быть не более ${num} символов`,
};

const values = {
  phone: { min: 11, max: 20 },
  password: { min: 8, max: 40 },
};

type ValidationRule = {
  [key: string]: Schema;
};

const createValidationSchema = <T extends ValidationRule>(rule: T) => rule;

export const validationSchema = createValidationSchema({
  email: string().trim().email(messages.email).required(messages.required),
  phone: string()
    .trim()
    .matches(regExps.phone, messages.phone)
    .required(messages.required),
  password: string()
    .trim()
    .min(values.password.min, messages.min('пароля', values.password.min))
    .max(values.password.max, messages.min('пароля', values.password.max))
    .required(messages.required),
  confirmPassword: string()
    .trim()
    .oneOf([ref('password')], messages.confirmPassword)
    .required(messages.required),
});

export type FieldsTypes = keyof typeof validationSchema;

export const getValidationSchema = <
  T extends Partial<Record<FieldsTypes, T[keyof T]>>
>(
  ...fields: FieldsTypes[]
): ObjectSchema<T> => {
  const schema: Partial<typeof validationSchema> = {};

  fields.forEach((field) => {
    schema[field] = validationSchema[field];
  });

  return object(schema) as ObjectSchema<T>;
};
