import { ChangeEvent, FC, FormEvent, useEffect } from 'react';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectProfileName,
  selectIsProfileDateOfBirth,
  selectIsProfileLocation,
  selectIsProfilePhoto,
  selectIsProfileCallSign,
} from 'store/profile/selectors';
import { useFormWithValidation } from 'hooks/use-form-with-validation';
import { Patterns } from 'utils/constants';
import { fetchProfile } from 'store/profile/thunk';
import type { PersonalFormData } from './types';
import styles from './personal-data.module.scss';

/**
 * Компонент-виджет с редактируемой формой данных профиля.
 * */

export const PersonalData: FC = () => {
  const {
    handleChange,
    isValid,
    errors,
    handleChangeFiles,
    values,
    setValues,
    setIsValid,
  } = useFormWithValidation<PersonalFormData>();

  const name = useAppSelector(selectProfileName);
  const dateOfBirth = useAppSelector(selectIsProfileDateOfBirth);
  const location = useAppSelector(selectIsProfileLocation);
  const nickname = useAppSelector(selectIsProfileCallSign);
  const avatar = useAppSelector(selectIsProfilePhoto);

  const personalData = { name, dateOfBirth, location, nickname, avatar };
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValues(personalData);
  }, []);

  const onChangeFile = (evt: ChangeEvent<HTMLInputElement>) => {
    handleChangeFiles(evt, Patterns.image);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    void dispatch(fetchProfile());
    setIsValid(false);
  };

  return (
    <Card className={styles.personalData}>
      <Heading level={3} size="l" text="Личные данные" weight="bold" />

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
          isValid={!errors.name}
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
          isValid={!errors.dateOfBirth}
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
          isValid={!errors.region}
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
          isValid={!errors.nickname}
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
          isValid={!errors.avatar}
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
};
