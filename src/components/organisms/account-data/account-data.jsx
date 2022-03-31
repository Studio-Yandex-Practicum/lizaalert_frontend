import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from '../../templates/card/card';
import styles from './account-data.module.scss';
import Button from '../../molecules/button/button';

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

  return (
    <Card className={styles.accountData}>
      <h2 className={styles.title}>Аккаунт</h2>

      <form name="accountData" className={styles.form}>
        <div className={styles.inputSection} onChange={onInputValuesChange}>
          {userPhoneNumber}
        </div>
        <div className={styles.inputSection}>{userEmail}</div>
        <div className={styles.inputSection}>{userPassword}</div>
        <Button type="submit" disabled className={styles.submitButton}>
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
