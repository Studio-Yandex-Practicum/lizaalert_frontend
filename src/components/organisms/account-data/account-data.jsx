import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import styles from './account-data.module.scss';

function AccountData({ phoneNumber, email, password }) {
  const [isInputsEdited, setIsInputsEdited] = useState(false);
  // const [inputValues, setInputValues] = useState({
  //   phoneNumber: '+71234567890',
  //   email: 'anna@liza-alert.ru',
  //   password: 'password',
  // });
  const onInputValuesChange = (evt) => {
    setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value,
    });
    if (!isInputsEdited) {
      setIsInputsEdited(true);
    }
  };
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    // const { email, password } = inputValues;
  };
  return (
    <Card className={styles.accountData}>
      <Heading level={2} size="l" title="Аккаунт" />
      <form
        name="accountData"
        onSubmit={handleFormSubmit}
        className={styles.form}
      >
        <Input
          labelName="Номер телефона"
          type="tel"
          inputName="mobilePhone"
          value={phoneNumber}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Номер телефона начиная с +7"
          disabled
        />
        <Input
          labelName="Email"
          type="email"
          inputName="email"
          value={email}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Ваш email"
        />
        <Input
          labelName="Пароль"
          type="password"
          inputName="password"
          value={password}
          onChange={onInputValuesChange}
          placeholder="Ваш пароль"
          className={styles.inputSection}
        />
        <Button
          type="submit"
          disabled={!isInputsEdited}
          className={styles.submitButton}
        >
          Сохранить изменения
        </Button>
      </form>
    </Card>
  );
}

AccountData.defaultProps = {
  phoneNumber: '+71234567890',
  email: 'anna@liza-alert.ru',
  password: 'password',
};

AccountData.propTypes = {
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default AccountData;
