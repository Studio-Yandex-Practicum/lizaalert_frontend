import { useEffect } from 'react';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import styles from './personal-data.module.scss';
import { useFormWithValidation } from '../../../hooks';

function PersonalData() {
  const {
    handleChange,
    isValid,
    errors,
    handleChangeFiles,
    values,
    setValues,
  } = useFormWithValidation();

  useEffect(() => {
    setValues({
      name: 'Иванова Анна Сидоровна',
      dateOfBirth: '1990-01-01',
      region: 'г. Санкт-Петербург',
      nickname: 'Белка',
      avatar: '',
    });
  }, []);

  const onChangeInputValue = (evt) => {
    handleChange(evt);
  };

  const onChangeFile = (e) => {
    const pattern = /\.(gif|jpg|jpeg|tiff|png)$/i;
    // setInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
    handleChangeFiles(e, pattern);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    // const { email, password } = inputValues;
  };

  return (
    <Card className={styles.personalData}>
      <Heading
        leve={2}
        size="l"
        title="Личные данные"
        className={styles.heading}
      />
      <form
        name="personalData"
        className={styles.form}
        onSubmit={handleFormSubmit}
      >
        <Input
          labelName="ФИО"
          type="text"
          inputName="name"
          value={values.name || ''}
          onChange={onChangeInputValue}
          className={styles.inputSection}
          placeholder="Ваше ФИО"
          error={errors.name}
          minLength={2}
          required
        />
        <Input
          labelName="Дата рождения"
          type="date"
          inputName="dateOfBirth"
          value={values.dateOfBirth || ''}
          onChange={onChangeInputValue}
          className={styles.inputSection}
          placeholder="Дата рождения"
          max="2050-12-31"
          min="1900-01-01"
          error={errors.dateOfBirth}
          required
        />
        <Input
          labelName="Географический регион"
          type="text"
          inputName="region"
          value={values.region || ''}
          onChange={onChangeInputValue}
          className={styles.inputSection}
          placeholder="Регион проживания"
          error={errors.region}
          minLength={2}
          required
        />
        <Input
          labelName="Позывной на форуме"
          type="text"
          inputName="nickname"
          value={values.nickname}
          onChange={onChangeInputValue}
          className={styles.inputSection}
          placeholder="Позывной на форуме"
          error={errors.nickname}
          minLength={2}
          required
        />
        <Input
          labelName="Фото"
          type="file"
          accept="image/*"
          inputName="avatar"
          value={values.avatar || ''}
          onChange={onChangeFile}
          error={errors.avatar}
          className={styles.inputSection}
          placeholder="Ваше фото"
        />
        <Button
          disabled={!isValid}
          type="submit"
          className={styles.submitButton}
        >
          Сохранить изменения
        </Button>
      </form>
    </Card>
  );
}

export default PersonalData;
