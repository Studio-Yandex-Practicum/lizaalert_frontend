import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../../molecules/button';
import { Input } from '../../molecules/input';
import styles from './personal-data.module.scss';
import { PersonalDataType } from './types';
import { selectProfilePersonal } from '../../../store/profile/selectors';
import { setPersonalData } from '../../../store/profile/slice';
import { useFormWithValidation } from '../../../hooks';
import { patterns } from '../../../utils/constants';

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
        name="personalDataForm"
        className={styles.form}
        onSubmit={handleFormSubmit}
      >
        <Input
          labelName="ФИО"
          type="text"
          name="name"
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
          name="dateOfBirth"
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
          name="region"
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
          name="nickname"
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
          name="avatar"
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
