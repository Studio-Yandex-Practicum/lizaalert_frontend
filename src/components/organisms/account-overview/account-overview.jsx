import PropTypes from 'prop-types';
import Card from '../../templates/card/card';
import styles from './account-overview.module.scss';
import DefaultImg from '../../../assets/images/profile.jpg';
import TextWithIcon from '../../molecules/text-with-icon/text-with-icon';
import Button from '../../molecules/button/button';

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
        <li className={styles.accountMetaItem}>
          <TextWithIcon text={userStatus} iconType="rank" />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon text={userOccupation} iconType="role" />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            text={`Пройдено ${coursesFinished} курса`}
            iconType="course"
          />
        </li>
      </ul>
      <Button
        view="secondary"
        iconName="logout"
        iconPosition="back"
        className={styles.logout}
      >
        Выйти из аккаунта
      </Button>
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
