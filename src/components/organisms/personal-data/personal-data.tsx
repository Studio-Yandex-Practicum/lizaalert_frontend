import { FC, useEffect } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { useAppDispatch, useAppSelector } from 'store';
import { selectProfilePersonal } from 'store/profile/selectors';
import { setPersonalData } from 'store/profile/slice';
import { getValidationSchema } from 'utils/validation';
import { compareObjectFields } from 'utils/compare-object-fields';
import type { PersonalFormData } from './types';
import styles from './personal-data.module.scss';

const schema = getValidationSchema<PersonalFormData>(
  'name',
  'dateOfBirth',
  'region',
  'nickname',
  'avatar'
);

const initialValues: PersonalFormData = {
  name: '',
  dateOfBirth: '',
  region: '',
  nickname: '',
  avatar: '',
};

const fieldsToCompare = ['name', 'dateOfBirth', 'region', 'nickname', 'avatar'];
/**
 * Компонент-виджет с редактируемой формой данных профиля.
 * */

export const PersonalData: FC = () => {
  const dispatch = useAppDispatch();
  const personalData = useAppSelector<PersonalFormData>(selectProfilePersonal);

  const handleSubmit = async (
    values: PersonalFormData,
    { validateForm }: FormikHelpers<PersonalFormData>
  ) => {
    await validateForm(values);
    void dispatch(setPersonalData(values));
  };

  const formik = useFormik<PersonalFormData>({
    initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  const areSameValues = compareObjectFields(
    personalData,
    formik.values,
    fieldsToCompare
  );

  useEffect(() => {
    void formik.setValues(personalData);
  }, [personalData]);

  return (
    <Card className={styles.personalData}>
      <Heading level={3} size="l" text="Личные данные" weight="bold" />

      <form
        name="personalDataForm"
        className={styles.form}
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <Input
          labelName="ФИО"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          isWithIcon
          placeholder="Ваше ФИО"
          isValid={!formik.touched.name || !formik.errors.name}
          error={formik.errors.name}
        />
        <Input
          labelName="Дата рождения"
          type="date"
          name="dateOfBirth"
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          isWithIcon
          placeholder="Дата рождения"
          isValid={!formik.touched.dateOfBirth || !formik.errors.dateOfBirth}
          error={formik.errors.dateOfBirth}
        />
        <Input
          labelName="Географический регион"
          type="text"
          name="region"
          value={formik.values.region}
          onChange={formik.handleChange}
          isWithIcon
          placeholder="Регион проживания"
          isValid={!formik.touched.region || !formik.errors.region}
          error={formik.errors.region}
        />
        <Input
          labelName="Позывной на форуме"
          type="text"
          name="nickname"
          value={formik.values.nickname}
          onChange={formik.handleChange}
          isWithIcon
          placeholder="Позывной на форуме"
          isValid={!formik.touched.nickname || !formik.errors.nickname}
          error={formik.errors.nickname}
        />
        <Input
          labelName="Фото"
          type="file"
          accept="image/*"
          name="avatar"
          value={formik.values.avatar}
          onChange={formik.handleChange}
          isValid={!formik.touched.avatar || !formik.errors.avatar}
          error={formik.errors.avatar}
          isWithIcon
          placeholder="Ваше фото"
        />
        <Button
          disabled={areSameValues || formik.isSubmitting}
          type="submit"
          className={styles.submitButton}
          text="Сохранить изменения"
        />
      </form>
    </Card>
  );
};
