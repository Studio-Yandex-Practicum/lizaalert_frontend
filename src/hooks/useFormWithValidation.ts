import { useCallback, useState, ChangeEvent } from 'react';

const useFormWithValidation = <T extends Record<string, unknown>>() => {
  type ErrorsType = Record<keyof T, string>;

  const [values, setValues] = useState<T>({} as T);
  const [errors, setErrors] = useState<ErrorsType>({} as ErrorsType);
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
    (newValues = {} as T, newErrors = {} as ErrorsType, newIsValid = false) => {
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
