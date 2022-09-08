import { useSelector } from 'react-redux';
import { Card } from '../../atoms/card';
import { Button } from '../../molecules/button';
import { TextWithIcon } from '../../molecules/text-with-icon';
import styles from './account-overview.module.scss';
import { AccountOverviewType } from './types';
import { selectProfileOverview } from '../../../store/profile/selectors';
import defaultImg from '../../../assets/images/profile.jpg';

/**
 * @description Компонент-карточка с информацией профиля пользователя.
 * */

function AccountOverview() {
  // TODO заменить первый аргумент на RootState после типизации Store
  const accountOverview = useSelector<unknown, AccountOverviewType>(
    selectProfileOverview
  );

  return (
    <Card className={styles.accountOverview}>
      <div className={styles.avatarContainer}>
        {/* Заменить значение аттрибута src на accountOverview.avatar когда будет готов бэкенд, сейчас оставлено для наглядности */}
        <img className={styles.avatar} src={defaultImg} alt="Фото профиля" />
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
        hover="hover-border"
        iconName="logout"
        iconPosition="back"
        className={styles.logout}
        text="Выйти из аккаунта"
      />
    </Card>
  );
}

export default AccountOverview;
