import { ChangeEvent, useState } from 'react';
import { useEvent } from './use-event';

type Values<T> = Partial<T>;
type Errors<T> = Partial<Record<keyof T, string>>;
type ResetFunction<T> = (
  values: Values<T>,
  errors: Errors<T>,
  isValid: boolean
) => void;

/**
 * Хук реализует логику хранения и обработки данных формы.
 * Можно типизировать возвращаемое значение через Generic.
 * Возвращает объект собранных с формы значений, ошибок, различные флаги и обработчики.
 *
 * @returns \{ values, handleChange, handleChangeFiles, errors, sValid, resetForm, setValues, setIsValid \}
 * */

export const useFormWithValidation = <T extends Record<string, unknown>>() => {
  const [values, setValues] = useState<Values<T>>({});
  const [errors, setErrors] = useState<Errors<T>>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = useEvent((evt: ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    const form = target.closest('form');
    if (form) {
      setIsValid(form.checkValidity());
    }
  });

  const handleChangeFiles = useEvent(
    (evt: ChangeEvent<HTMLInputElement>, pattern: RegExp) => {
      if (!evt.target.files) {
        return;
      }
      const file = evt.target.files[0];
      const { name, value } = evt.target;
      if (!file) {
        return;
      }
      if (file && pattern.test(file.name)) {
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: '' });
      } else {
        setErrors({ ...errors, [name]: 'Некорректный формат файла' });
        setIsValid(false);
        return;
      }
      const form = evt.target.closest('form');
      if (form) {
        setIsValid(form.checkValidity());
      }
    }
  );

  const resetForm = useEvent<ResetFunction<T>>(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    }
  );

  return {
    values,
    handleChange,
    handleChangeFiles,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
};
