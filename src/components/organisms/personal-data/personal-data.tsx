import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import { useFormWithValidation } from '../../../hooks';
import { selectProfilePersonal } from '../../../store/profile/selectors';
import styles from './personal-data.module.scss';
import { setPersonalData } from '../../../store/profile/slice';
import { patterns } from '../../../utils/constants';

type PersonalDataType = {
  name: string;
  dateOfBirth: string;
  region: string;
  nickname: string;
  avatar: string;
};

/**
 * @description Компонент-виджет с редактируемой формой данных профиля.
 * */

function PersonalData() {
  const {
    handleChange,
    isValid,
    errors,
    handleChangeFiles,
    values,
    setValues,
    setIsValid,
  } = useFormWithValidation<PersonalDataType>();

  // TODO заменить первый аргумент на RootState после типизации Store
  const personalData = useSelector<unknown, PersonalDataType>(
    selectProfilePersonal
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setValues(personalData);
  }, [personalData]);

  const onChangeFile = (evt: ChangeEvent<HTMLInputElement>) => {
    handleChangeFiles(evt, patterns.image);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(setPersonalData(values));
    setIsValid(false);
  };

  return (
    <Card className={styles.personalData}>
      <Heading size="l" title="Личные данные" className={styles.heading} />
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
          onChange={handleChange}
          isWithIcon
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
          onChange={handleChange}
          isWithIcon
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
          onChange={handleChange}
          isWithIcon
          placeholder="Регион проживания"
          error={errors.region}
          minLength={2}
          required
        />
        <Input
          labelName="Позывной на форуме"
          type="text"
          inputName="nickname"
          value={values.nickname || ''}
          onChange={handleChange}
          isWithIcon
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
          isWithIcon
          placeholder="Ваше фото"
        />
        <Button
          disabled={!isValid}
          type="submit"
          className={styles.submitButton}
          text="Сохранить изменения"
        />
      </form>
    </Card>
  );
}

export default PersonalData;
