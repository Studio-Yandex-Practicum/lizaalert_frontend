import PropTypes from 'prop-types';
// import { useState } from 'react';
import Card from '../../templates/card/card';
import styles from './personal-data.module.scss';

function PersonalData({
  userName,
  userDateOfBirth,
  userRegion,
  userNickname,
  userAvatar,
}) {
  // изменение с false на true при внесении изменений в данные
  // const [isEdited, setIsEdited] = useState(false);

  // функцию для изменения значений инпутов
  // function onChange() {
  //   setIsEdited(true);
  // }

  return (
    <Card className={styles.personalData}>
      <h2 className={styles.title}>Личные данные</h2>

      <div className={styles.inputSection}>{userName}</div>
      <div className={styles.inputSection}>{userDateOfBirth}</div>
      <div className={styles.inputSection}>{userRegion}</div>
      <div className={styles.inputSection}>{userNickname}</div>
      <div className={styles.inputSection}>{userAvatar}</div>

      {/* Кнопку потом использовать с disabled={!isEdited} */}
      <div className={styles.submitButton}>Сохранить изменения</div>
    </Card>
  );
}

PersonalData.defaultProps = {
  userName: 'Иванова Анна Сидоровна',
  userDateOfBirth: '01.01.1990',
  userRegion: 'г. Санкт-Петербург',
  userNickname: 'Белка',
  userAvatar: 'photo.jpg',
};

PersonalData.propTypes = {
  userName: PropTypes.string,
  userDateOfBirth: PropTypes.string, // неуверена что string ?
  userRegion: PropTypes.string,
  userNickname: PropTypes.string,
  userAvatar: PropTypes.string, // неуверена что string ?
};

export default PersonalData;
