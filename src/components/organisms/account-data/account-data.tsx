import { FormEvent, useEffect } from 'react';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { useAppDispatch, useAppSelector } from 'store';
import { setAccountData } from 'store/profile/slice';
import { selectProfileAccount } from 'store/profile/selectors';
import useFormWithValidation from 'hooks/use-form-with-validation';
import styles from './account-data.module.scss';
import type { AccountFormData } from './types';

/**
 * Компонент-виджет с редактируемой формой данных аккаунта.
 * */

function AccountData() {
  const { handleChange, isValid, errors, values, setValues, setIsValid } =
    useFormWithValidation<AccountFormData>();

  const accountData = useAppSelector<AccountFormData>(selectProfileAccount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValues(accountData);
  }, [accountData]);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(setAccountData(values));
    setIsValid(false);
  };

  return (
    <Card className={styles.accountData}>
      <Heading level={3} size="l" weight="bold" text="Аккаунт" />

      <form
        name="accountDataForm"
        onSubmit={handleFormSubmit}
        className={styles.form}
      >
        <Input
          labelName="Номер телефона"
          type="tel"
          name="phoneNumber"
          value={values.phoneNumber || ''}
          onChange={handleChange}
          placeholder="Номер телефона начиная с +7"
          disabled
        />
        <Input
          labelName="Email"
          type="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          isValid={!errors.email}
          error={errors.email}
          isWithIcon
          placeholder="Ваш email"
        />
        <Input
          labelName="Пароль"
          type="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          placeholder="Ваш пароль"
          isWithIcon
          minLength={8}
          isValid={!errors.password}
          error={errors.password}
        />
        <Button
          type="submit"
          disabled={!isValid}
          className={styles.submitButton}
          text="Сохранить изменения"
        />
      </form>
    </Card>
  );
}

export default AccountData;
