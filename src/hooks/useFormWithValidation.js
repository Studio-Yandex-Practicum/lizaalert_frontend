import { useCallback, useState } from 'react';

const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleChangeFiles = (evt, pattern) => {
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
    setIsValid(evt.target.closest('form').checkValidity());
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
