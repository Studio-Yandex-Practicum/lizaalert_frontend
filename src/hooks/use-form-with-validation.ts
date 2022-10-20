import { ChangeEvent, useCallback, useState } from 'react';

/**
 * Хук реализует логику хранения и обработки данных формы.
 * Можно типизировать возвращаемое значение через Generic.
 * Возвращает объект собранных с формы значений, ошибок, различные флаги и обработчики.
 *
 * @returns \{ values, handleChange, handleChangeFiles, errors, sValid, resetForm, setValues, setIsValid \}
 * */

const useFormWithValidation = <T extends Record<string, unknown>>() => {
  const [values, setValues] = useState<Partial<T>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    const form = target.closest('form');
    if (form) {
      setIsValid(form.checkValidity());
    }
  };

  const handleChangeFiles = (
    evt: ChangeEvent<HTMLInputElement>,
    pattern: RegExp
  ) => {
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
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
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

export default useFormWithValidation;
