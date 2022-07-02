import { useCallback, useState } from 'react';

const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    const form = target.closest('form');
    if (form != null) {
      setIsValid(form.checkValidity());
    }
  };

  const handleChangeFiles = (
    evt: React.ChangeEvent<HTMLInputElement>,
    pattern: RegExp
  ) => {
    if (evt.target.files == null) {
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
    if (form != null) {
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
