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
import { compareObjectFields } from 'utils/compare-object-fields';
import { PHONE_MASK, UserData } from 'utils/constants';
import type { AccountFormData } from './types';
import styles from './account-data.module.scss';

const schema = getValidationSchema<AccountFormData>(
  UserData.email,
  UserData.phone
);

const initialValues: AccountFormData = {
  email: '',
  phone: '',
};

const fieldsToCompare = ['phone'];

/**
 * Компонент-виджет с редактируемой формой данных аккаунта.
 * */

export const AccountData: FC = () => {
  const accountData = useAppSelector<AccountFormData>(selectProfileAccount);
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: AccountFormData,
    { validateForm }: FormikHelpers<AccountFormData>
  ) => {
    await validateForm(values);
    void dispatch(setAccountData(values));
  };

  const formik = useFormik<AccountFormData>({
    initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  const areSameValues = compareObjectFields(
    accountData,
    formik.values,
    fieldsToCompare
  );

  useEffect(() => {
    void formik.setValues(accountData);
  }, [accountData]);

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
          mask={PHONE_MASK}
          labelName="Номер телефона"
          type="tel"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Номер телефона начиная с +7"
          isWithIcon
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
        <Button
          type="submit"
          disabled={areSameValues || formik.isSubmitting}
          className={styles.submitButton}
          text="Сохранить изменения"
        />
      </form>
    </Card>
  );
};
