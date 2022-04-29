import { useEffect } from 'react';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import { useFormWithValidation } from '../../../hooks';
import styles from './account-data.module.scss';

function AccountData() {
  const { handleChange, isValid, errors, values, setValues } =
    useFormWithValidation();

  useEffect(() => {
    setValues({
      phoneNumber: '+71234567890',
      email: 'anna@liza-alert.ru',
      password: 'password',
    });
  }, []);

  const onChangeInputValue = (evt) => {
    handleChange(evt);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    // const { email, password } = inputValues;
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
          onChange={onChangeInputValue}
          className={styles.inputSection}
          placeholder="Номер телефона начиная с +7"
          disabled
        />
        <Input
          labelName="Email"
          type="email"
          inputName="email"
          value={values.email || ''}
          onChange={onChangeInputValue}
          error={errors.email}
          className={styles.inputSection}
          placeholder="Ваш email"
        />
        <Input
          labelName="Пароль"
          type="password"
          inputName="password"
          value={values.password || ''}
          onChange={onChangeInputValue}
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
