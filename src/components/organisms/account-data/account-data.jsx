import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import { useFormWithValidation } from '../../../hooks';
import styles from './account-data.module.scss';
import { setAccountData } from '../../../store/profile/slice';
import { selectProfileAccount } from '../../../store/profile/selectors';

function AccountData() {
  const { handleChange, isValid, errors, values, setValues, setIsValid } =
    useFormWithValidation();

  const accountData = useSelector(selectProfileAccount);
  const dispatch = useDispatch();

  useEffect(() => {
    setValues(accountData);
  }, [accountData]);

  const handleFormSubmit = (evt) => {
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
          inputName="mobilePhone"
          value={values.phoneNumber || ''}
          onChange={handleChange}
          className={styles.inputSection}
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
          className={styles.inputSection}
          placeholder="Ваш email"
        />
        <Input
          labelName="Пароль"
          type="password"
          inputName="password"
          value={values.password || ''}
          onChange={handleChange}
          placeholder="Ваш пароль"
          className={styles.inputSection}
          minLength={8}
          error={errors.password}
        />
        <Button
          type="submit"
          disabled={!isValid}
          className={styles.submitButton}
        >
          Сохранить изменения
        </Button>
      </form>
    </Card>
  );
}

export default AccountData;
