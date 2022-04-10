import { useState } from 'react';
import Card from '../../templates/card/card';
import Button from '../../molecules/button/button';
import Input from '../../molecules/input/input';
import styles from './personal-data.module.scss';

function PersonalData() {
  const [isInputChanged, setIsInputChanged] = useState(false);
  const [inputsValues, setInputsValues] = useState({
    name: 'Иванова Анна Сидоровна',
    dateOfBirth: '1990-01-01',
    region: 'г. Санкт-Петербург',
    nickname: 'Белка',
    avatar: '',
  });
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
    // const { email, password } = inputValues;
  };
  return (
    <Card className={styles.personalData}>
      <h2 className={styles.title}>Личные данные</h2>
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
