import { FC, FormEvent, useEffect } from 'react';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectProfileEmail,
  selectProfilePhone,
} from 'store/profile/selectors';
import { useFormWithValidation } from 'hooks/use-form-with-validation';
import { fetchProfile } from 'store/profile/thunk';
import styles from './account-data.module.scss';
import type { AccountFormData } from './types';

/**
 * Компонент-виджет с редактируемой формой данных аккаунта.
 * */

export const AccountData: FC = () => {
  const { handleChange, isValid, errors, values, setValues, setIsValid } =
    useFormWithValidation<AccountFormData>();

  const email = useAppSelector(selectProfileEmail);
  const phoneNumber = useAppSelector(selectProfilePhone);

  const accountData = { email, phoneNumber };
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValues(accountData);
  }, []);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    void dispatch(fetchProfile());
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
};
