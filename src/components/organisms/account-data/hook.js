import { useCallback, useState } from 'react';
const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage});
    if(value.length < 2) {
      setErrors({ ...errors, [name]: 'Слишком короткое'});
    }
    setIsValid(target.closest('form').checkValidity());
  };
  const handleChangeFiles = (evt, pattern) => {
    const file = evt.target.files[0];
    const { name } = evt.target;
    if (!file) {
      return;
    }
    if (file && pattern.test(file.name)) {
      setValues({ ...values, [name]: file });
      setErrors({ ...errors, [name]: '' });
    } else {
      setErrors({ ...errors, [name]: 'Некорректный формат файла' });
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
  };
};
export default useFormWithValidation;
