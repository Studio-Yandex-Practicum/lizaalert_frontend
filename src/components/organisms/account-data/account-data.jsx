import PropTypes from 'prop-types';
// import { useState } from 'react';
import Card from '../../templates/card/card';
import styles from './account-data.module.scss';

function AccountData({ userPhoneNumber, userEmail, userPassword }) {
  // const [isInputsEdited, setIsInputsEdited] = useState(false);
  // const [userData, setUserData] = useState({
  //   phoneNumber: userPhoneNumber,
  //   email: userEmail,
  //   password: userPassword,
  // });

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value,
  //   });
  //   setIsInputsEdited(true);
  // };

  return (
    <Card className={styles.accountData}>
      <h2 className={styles.title}>Аккаунт</h2>
      <div className={styles.inputSection}>{userPhoneNumber}</div>
      <div className={styles.inputSection}>{userEmail}</div>
      <div className={styles.inputSection}>{userPassword}</div>
      <div className={styles.submitButton}>Сохранить изменения</div>
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
