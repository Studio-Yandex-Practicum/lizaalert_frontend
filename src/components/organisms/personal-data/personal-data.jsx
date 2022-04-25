import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import styles from './personal-data.module.scss';
import { setPersonalData } from '../../../store/profile/slice';
import { selectProfilePersonal } from '../../../store/profile/selectors';

function PersonalData() {
  const personalData = useSelector(selectProfilePersonal);
  const dispatch = useDispatch();
  const [inputsValues, setInputsValues] = useState(personalData);
  const [isInputChanged, setIsInputChanged] = useState(false);

  const onInputValuesChange = (e) => {
    if (e.target.value !== inputsValues[e.target.name]) {
      setInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
      if (!isInputChanged) {
        setIsInputChanged(true);
      }
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setPersonalData(inputsValues));
    setIsInputChanged(false);
  };

  return (
    <Card className={styles.personalData}>
      <Heading level={2} size="l" title="Личные данные" />
      <form
        name="personalData"
        className={styles.form}
        onSubmit={handleFormSubmit}
      >
        <Input
          labelName="ФИО"
          type="text"
          inputName="name"
          value={inputsValues.name}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Ваше ФИО"
        />
        <Input
          labelName="Дата рождения"
          type="date"
          inputName="dateOfBirth"
          value={inputsValues.dateOfBirth}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Дата рождения"
        />
        <Input
          labelName="Географический регион"
          type="text"
          inputName="region"
          value={inputsValues.region}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Регион проживания"
        />
        <Input
          labelName="Позывной на форуме"
          type="text"
          inputName="nickname"
          value={inputsValues.nickname}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Позывной на форуме"
        />
        <Input
          labelName="Фото"
          type="file"
          accept="image/*"
          inputName="avatar"
          value={inputsValues.avatar}
          onChange={onInputValuesChange}
          className={styles.inputSection}
          placeholder="Ваше фото"
        />
        <Button
          disabled={!isInputChanged}
          type="submit"
          className={styles.submitButton}
        >
          Сохранить изменения
        </Button>
      </form>
    </Card>
  );
}

export default PersonalData;
