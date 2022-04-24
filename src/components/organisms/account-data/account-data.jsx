import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import { setAccountData } from '../../../store/profile/slice';
import styles from './account-data.module.scss';
import { selectProfileAccount } from '../../../store/profile/selectors';

function AccountData() {
  const accountData = useSelector(selectProfileAccount);
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState(accountData);
  const [isInputsEdited, setIsInputsEdited] = useState(false);

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
    setIsInputsEdited(false);
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

export default AccountData;
