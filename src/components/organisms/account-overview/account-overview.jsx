import PropTypes from 'prop-types';
import Card from '../../templates/card/card';
import styles from './account-overview.module.scss';
import DefaultImg from '../../../assets/images/profile.jpg';
import ProfileMeta from '../../molecules/profile-meta/profile-meta';

function AccountOverview({
  avatar,
  userName,
  userStatus,
  userOccupation,
  coursesFinished,
}) {
  return (
    <Card className={styles.accountOverview}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={avatar} alt="Фото профиля" />
      </div>
      <p className={styles.personalData}>{userName}</p>
      <ul className={styles.accountMeta}>
        <ProfileMeta text={userStatus} />
        <ProfileMeta text={userOccupation} />
        <ProfileMeta text={`Пройдено ${coursesFinished} курса`} />
      </ul>
      <div className={styles.exit}>Выйти из аккаунта</div>
    </Card>
  );
}

AccountOverview.defaultProps = {
  avatar: DefaultImg,
  userName: 'Иванова Анна Сидоровна',
  userStatus: 'Профессионал',
  userOccupation: 'Картограф',
  coursesFinished: 2,
};

AccountOverview.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string,
  userStatus: PropTypes.string,
  userOccupation: PropTypes.string,
  coursesFinished: PropTypes.number,
};

export default AccountOverview;
