import defaultImg from 'assets/images/profile.jpg';
import { Card } from 'components/atoms/card';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { useAppSelector } from 'store';
import { selectProfileOverview } from 'store/profile/selectors';
import styles from './account-overview.module.scss';
import { AccountOverviewType } from './types';

/**
 * Компонент-карточка с информацией профиля пользователя.
 * */

function AccountOverview() {
  const accountOverview = useAppSelector<AccountOverviewType>(
    selectProfileOverview
  );

  return (
    <Card className={styles.accountOverview}>
      <div className={styles.avatarContainer}>
        {/* Заменить значение атрибута src на accountOverview.avatar когда будет готов бэкенд, сейчас оставлено для наглядности */}
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
        hover="border"
        iconName="logout"
        iconPosition="back"
        className={styles.logout}
        text="Выйти из аккаунта"
      />
    </Card>
  );
}

export default AccountOverview;
