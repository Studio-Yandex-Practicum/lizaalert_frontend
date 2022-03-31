import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from '../../templates/card/card';
import styles from './personal-data.module.scss';

function PersonalData({ userName, userDateOfBirth, userRegion, userNickname }) {
  // изменение с false на true при внесении изменений в данные
  const [isInputChanged, setIsInputChanged] = useState(false);
  const [inputsValues, setInputsValues] = useState({
    name: userName,
    dateOfBirth: userDateOfBirth,
    region: userRegion,
    nickname: userNickname,
    avatar: '',
  });

  // функция на событие onChange для инпутов
  const onInputValuesChange = (e) => {
    if (e.target.value !== inputsValues[e.target.name] && isInputChanged) {
      setIsInputChanged(true);
      setInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
    }
  };

  return (
    <Card className={styles.personalData}>
      <h2 className={styles.title}>Личные данные</h2>
      <form name="personalData" className={styles.form}>
        <div className={styles.inputSection}>{userName}</div>
        <div className={styles.inputSection}>{userDateOfBirth}</div>
        <div className={styles.inputSection}>{userRegion}</div>
        <div className={styles.inputSection}>{userNickname}</div>
        <div className={styles.inputSection} />
        {/* Кнопку потом использовать с disabled={!isInputChanged} */}
        <div className={styles.submitButton}>Сохранить изменения</div>
      </form>
    </Card>
  );
}

PersonalData.defaultProps = {
  userName: 'Иванова Анна Сидоровна',
  userDateOfBirth: '01.01.1990',
  userRegion: 'г. Санкт-Петербург',
  userNickname: 'Белка',
};

PersonalData.propTypes = {
  userName: PropTypes.string,
  userDateOfBirth: PropTypes.string,
  userRegion: PropTypes.string,
  userNickname: PropTypes.string,
};

export default PersonalData;
