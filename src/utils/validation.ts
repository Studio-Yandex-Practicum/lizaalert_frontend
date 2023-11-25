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
  dateOfBirth: (minDate: string, maxDate: string) =>
    `Введите верную дату рождения между ${minDate} и ${maxDate}`,
  min: (field: string, num: number) =>
    `Длина ${field} должна быть не менее ${num} символов`,
  max: (field: string, num: number) =>
    `Длина ${field} должна быть не более ${num} символов`,
};

const values = {
  password: { min: 8, max: 40 },
  name: { min: 2 },
  region: { min: 2 },
  nickname: { min: 2 },
  dateOfBirth: { min: '1900-01-01', max: '2050-12-31' },
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
  name: string()
    .trim()
    .min(values.name.min, messages.min('ФИО', values.name.min))
    .required(messages.required),
  dateOfBirth: string()
    .test(
      'dateOfBirth',
      messages.dateOfBirth(values.dateOfBirth.min, values.dateOfBirth.max),
      (value) =>
        !value ||
        (new Date(value) >= new Date(values.dateOfBirth.min) &&
          new Date(value) <= new Date(values.dateOfBirth.max))
    )
    .required(messages.required),
  region: string()
    .trim()
    .min(
      values.region.min,
      messages.min('названия географического региона', values.region.min)
    )
    .required(messages.required),
  nickname: string()
    .trim()
    .min(values.region.min, messages.min('позывного', values.region.min))
    .required(messages.required),
  avatar: string().required(messages.required),
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
