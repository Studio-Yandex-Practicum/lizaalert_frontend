// import { FC, useState, useEffect } from 'react';
import { FC, useEffect } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { useAppDispatch, useAppSelector } from 'store';
import { setAccountData } from 'store/profile/slice';
import { selectProfileAccount } from 'store/profile/selectors';
import { getValidationSchema } from 'utils/validation';
import type { AccountFormData } from './types';
import styles from './account-data.module.scss';

const schema = getValidationSchema<AccountFormData>(
  'email',
  'phone',
  'password'
);

const initialValues: AccountFormData = {
  email: '',
  phoneNumber: '',
  password: '',
};

/**
 * Компонент-виджет с редактируемой формой данных аккаунта.
 * */

export const AccountData: FC = () => {
  const accountData = useAppSelector<AccountFormData>(selectProfileAccount);
  const dispatch = useAppDispatch();

  // const [isFormChanged, setIsFormChanged] = useState(false);

  const handleSubmit = async (
    values: AccountFormData,
    { validateForm }: FormikHelpers<AccountFormData>
  ) => {
    await validateForm(values);
    void dispatch(setAccountData(values));
    // setIsFormChanged(false);
  };

  const formik = useFormik<AccountFormData>({
    initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  const areAllValuesSet =
    Object.keys(formik.values).length === Object.keys(formik.touched).length;

  // const handleInputChange = () => {
  //   setIsFormChanged(true);
  // };

  useEffect(() => {
    void formik.setValues(accountData);

    // setIsFormChanged(areAllValuesSet);
  }, [accountData, formik.values]);

  return (
    <Card className={styles.accountData}>
      <Heading level={3} size="l" weight="bold" text="Аккаунт" />

      <form
        name="accountDataForm"
        onSubmit={formik.handleSubmit}
        className={styles.form}
        noValidate
      >
        <Input
          labelName="Номер телефона"
          type="tel"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          placeholder="Номер телефона начиная с +7"
          disabled
        />
        <Input
          labelName="Email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Ваш email"
          disabled
        />
        <Input
          labelName="Пароль"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Ваш пароль"
          isWithIcon
          isValid={!formik.touched.password || !formik.errors.password}
          error={formik.errors.password}
        />
        <Button
          type="submit"
          disabled={
            !areAllValuesSet && (formik.isSubmitting || !formik.isValid)
          }
          className={styles.submitButton}
          text="Сохранить изменения"
        />
      </form>
    </Card>
  );
};
