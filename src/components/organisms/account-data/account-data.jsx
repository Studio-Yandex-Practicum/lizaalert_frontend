import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from '../../templates/card/card';
import styles from './account-data.module.scss';
import Button from '../../molecules/button/button';
import Input from '../../molecules/input/input';

function AccountData({ userPhoneNumber, userEmail, userPassword }) {
  const [isInputsEdited, setIsInputsEdited] = useState(false);
  const [inputValues, setInputValues] = useState({
    phoneNumber: userPhoneNumber,
    email: userEmail,
    password: userPassword,
  });

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
      <h2 className={styles.title}>Аккаунт</h2>

      <form
        name="accountData"
        onSubmit={handleFormSubmit}
        className={styles.form}
      >
        <Input
          labelName="Номер телефона"
          type="tel"
          inputName="mobilePhone"
          value={inputValues.phoneNumber}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          disabled="true"
        />
        <Input
          labelName="Email"
          type="email"
          inputName="email"
          value={inputValues.email}
          onChange={onInputValuesChange}
          className={styles.inputSection}
        />
        <Input
          labelName="Пароль"
          type="password"
          inputName="password"
          value={inputValues.password}
          onChange={onInputValuesChange}
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

AccountData.propTypes = {
  userPhoneNumber: PropTypes.string,
  userEmail: PropTypes.string,
  userPassword: PropTypes.string,
};

AccountData.defaultProps = {
  userPhoneNumber: '+71234567890',
  userEmail: 'anna@liza-alert.ru',
  userPassword: 'password',
};

export default AccountData;
