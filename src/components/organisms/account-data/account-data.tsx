import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import styles from './account-data.module.scss';
import { setAccountData } from '../../../store/profile/slice';
import { selectProfileAccount } from '../../../store/profile/selectors';
import { useFormWithValidation } from '../../../hooks';

type AccountDataType = {
  phoneNumber: string;
  email: string;
  password: string;
};

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
      <Heading level={2} size="l" title="Аккаунт" className={styles.heading} />
      <form
        name="accountData"
        onSubmit={handleFormSubmit}
        className={styles.form}
      >
        <Input
          labelName="Номер телефона"
          type="tel"
          inputName="phoneNumber"
          value={values.phoneNumber || ''}
          onChange={handleChange}
          placeholder="Номер телефона начиная с +7"
          disabled
        />
        <Input
          labelName="Email"
          type="email"
          inputName="email"
          value={values.email || ''}
          onChange={handleChange}
          error={errors.email}
          isWithIcon
          placeholder="Ваш email"
        />
        <Input
          labelName="Пароль"
          type="password"
          inputName="password"
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
