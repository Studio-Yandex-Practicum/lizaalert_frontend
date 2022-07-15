import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../../molecules/button';
import { Input } from '../../molecules/input';
import styles from './account-data.module.scss';
import { AccountDataType } from './types';
import { setAccountData } from '../../../store/profile/slice';
import { selectProfileAccount } from '../../../store/profile/selectors';
import { useFormWithValidation } from '../../../hooks';

/**
 * @description Компонент-виджет с редактируемой формой данных аккаунта.
 * */

function AccountData() {
  const { handleChange, isValid, errors, values, setValues, setIsValid } =
    useFormWithValidation<AccountDataType>();

  // TODO заменить первый аргумент на RootState после типизации Store
  const accountData = useSelector<unknown, AccountDataType>(
    selectProfileAccount
  );
  const dispatch = useDispatch();

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
      <Heading size="l" title="Аккаунт" className={styles.heading} />
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
