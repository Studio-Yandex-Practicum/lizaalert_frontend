import { useSelector } from 'react-redux';
import { Card } from '../../atoms';
import { Button, TextWithIcon } from '../../molecules';
import styles from './account-overview.module.scss';
import DefaultImg from '../../../assets/images/profile.jpg';
import { selectProfileOverview } from '../../../store/profile/selectors';

function AccountOverview() {
  const accountOverview = useSelector(selectProfileOverview);
  return (
    <Card className={styles.accountOverview}>
      <div className={styles.avatarContainer}>
        {/* Заменить значение аттрибута src на accountOverview.avatar когда будет готов бэкенд, сейчас оставлено для наглядности */}
        <img className={styles.avatar} src={DefaultImg} alt="Фото профиля" />
      </div>
      <p className={styles.personalData}>{accountOverview.userName}</p>
      <ul className={styles.accountMeta}>
        <li className={styles.accountMetaItem}>
          <TextWithIcon text={accountOverview.userStatus} iconType="rank" />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon text={accountOverview.userOccupation} iconType="role" />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            text={`Пройдено ${accountOverview.coursesFinished} курса`}
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

export default AccountOverview;
