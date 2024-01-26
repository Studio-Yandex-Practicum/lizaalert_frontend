import { FC, useEffect } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { UserDataFieldNames } from 'utils/constants';
import { getValidationSchema } from 'utils/validation';
import { compareObjectFields } from 'utils/compare-object-fields';
import { useAppDispatch, useAppSelector } from 'store';
import { selectProfilePersonal } from 'store/profile/selectors';
import { setPersonalData } from 'store/profile/slice';
import type { PersonalFormData } from './types';
import styles from './personal-data.module.scss';

const initialValues: PersonalFormData = {
  [UserDataFieldNames.Name]: '',
  [UserDataFieldNames.DateOfBirth]: '',
  [UserDataFieldNames.Region]: '',
  [UserDataFieldNames.Nickname]: '',
  [UserDataFieldNames.Avatar]: '',
};

const fieldsToCompare = [
  UserDataFieldNames.Name,
  UserDataFieldNames.DateOfBirth,
  UserDataFieldNames.Region,
  UserDataFieldNames.Nickname,
  UserDataFieldNames.Avatar,
];

const schema = getValidationSchema<PersonalFormData>(...fieldsToCompare);

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
          name={UserDataFieldNames.Name}
          value={formik.values[UserDataFieldNames.Name]}
          onChange={formik.handleChange}
          isWithIcon
          placeholder="Ваше ФИО"
          isValid={
            !formik.touched[UserDataFieldNames.Name] ||
            !formik.errors[UserDataFieldNames.Name]
          }
          error={formik.errors[UserDataFieldNames.Name]}
        />
        <Input
          labelName="Дата рождения"
          type="date"
          name={UserDataFieldNames.DateOfBirth}
          value={formik.values[UserDataFieldNames.DateOfBirth]}
          onChange={formik.handleChange}
          isWithIcon
          placeholder="Дата рождения"
          isValid={
            !formik.touched[UserDataFieldNames.DateOfBirth] ||
            !formik.errors[UserDataFieldNames.DateOfBirth]
          }
          error={formik.errors[UserDataFieldNames.DateOfBirth]}
        />
        <Input
          labelName="Географический регион"
          type="text"
          name={UserDataFieldNames.Region}
          value={formik.values[UserDataFieldNames.Region]}
          onChange={formik.handleChange}
          isWithIcon
          placeholder="Регион проживания"
          isValid={
            !formik.touched[UserDataFieldNames.Region] ||
            !formik.errors[UserDataFieldNames.Region]
          }
          error={formik.errors[UserDataFieldNames.Region]}
        />
        <Input
          labelName="Позывной на форуме"
          type="text"
          name={UserDataFieldNames.Nickname}
          value={formik.values[UserDataFieldNames.Nickname]}
          onChange={formik.handleChange}
          isWithIcon
          placeholder="Позывной на форуме"
          isValid={
            !formik.touched[UserDataFieldNames.Nickname] ||
            !formik.errors[UserDataFieldNames.Nickname]
          }
          error={formik.errors[UserDataFieldNames.Nickname]}
        />
        <Input
          labelName="Фото"
          type="file"
          accept="image/*"
          name={UserDataFieldNames.Avatar}
          value={formik.values[UserDataFieldNames.Avatar]}
          onChange={formik.handleChange}
          isValid={
            !formik.touched[UserDataFieldNames.Avatar] ||
            !formik.errors[UserDataFieldNames.Avatar]
          }
          error={formik.errors[UserDataFieldNames.Avatar]}
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
