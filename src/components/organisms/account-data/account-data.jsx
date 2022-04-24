// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import { setAccountData } from '../../../store/profile/slice';
import styles from './account-data.module.scss';
import {
  selectProfile,
  selectProfileAccount,
  //   //   selectProfileLoading,
} from '../../../store/profile/selectors';
// import fetchProfileAction from '../../../store/profile/thunk';

function AccountData() {
  const { profile } = useSelector(selectProfile);
  const accountData = useSelector(selectProfileAccount);
  // const isLoading = useSelector(selectProfileLoading);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProfileAction());
  // }, [dispatch]);

  const [isInputsEdited, setIsInputsEdited] = useState(false);
  const [inputValues, setInputValues] = useState(profile);
  console.log(profile.accountData);
  console.log(accountData);

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
    dispatch(setAccountData(inputValues));
  };

  // if (isLoading) {
  //   return <h3>Loading...</h3>;
  // }
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
          value={inputValues.phoneNumber}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Номер телефона начиная с +7"
          disabled
        />
        <Input
          labelName="Email"
          type="email"
          inputName="email"
          value={inputValues.email}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Ваш email"
        />
        <Input
          labelName="Пароль"
          type="password"
          inputName="password"
          value={inputValues.password}
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

// AccountData.defaultProps = {
//   data: PropTypes.shape({
//     phoneNumber: '+71234567890',
//     email: 'anna@liza-alert.ru',
//     password: 'password',
//   }),
// };

// AccountData.propTypes = {
//   accountData: PropTypes.shape({
//     phoneNumber: PropTypes.string,
//     email: PropTypes.string,
//     password: PropTypes.string,
//   }).isRequired,
// };

export default AccountData;
