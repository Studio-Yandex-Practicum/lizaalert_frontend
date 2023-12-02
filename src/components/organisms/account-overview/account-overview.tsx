import type { FC } from 'react';
import defaultImg from 'assets/images/profile.jpg';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { useAppSelector } from 'store';
import {
  selectProfileName,
  selectIsProfileCountPassCourse,
  selectIsProfileDepartment,
} from 'store/profile/selectors';
import styles from './account-overview.module.scss';

/**
 * Компонент-карточка с информацией профиля пользователя.
 * */

export const AccountOverview: FC = () => {
  // const accountOverview = useAppSelector<AccountOverviewType>(
  //   selectProfileOverview
  // );
  const userName = useAppSelector(selectProfileName);
  const coursesFinished = useAppSelector(selectIsProfileCountPassCourse);
  const userOccupation = useAppSelector(selectIsProfileDepartment);

  return (
    <Card className={styles.accountOverview}>
      <div className={styles.avatarContainer}>
        {/* Заменить значение атрибута src на accountOverview.avatar когда будет готов бэкенд, сейчас оставлено для наглядности */}
        <img className={styles.avatar} src={defaultImg} alt="Фото профиля" />
      </div>

      <Heading level={3} weight="bold" className={styles.personalData}>
        {userName}
      </Heading>

      <ul className={styles.accountMeta}>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            // text={accountOverview.userStatus}
            text="text"
            iconType="rank"
          />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon htmlTag="span" text={userOccupation} iconType="role" />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            text={
              coursesFinished !== null && coursesFinished !== undefined
                ? `Пройдено ${coursesFinished} курса`
                : 'Вы еще не прошли ни одного курса'
            }
            iconType="course"
          />
        </li>
      </ul>

      <Button
        view="secondary"
        hover="border"
        iconName="logout"
        className={styles.logout}
        text="Выйти из аккаунта"
      />
    </Card>
  );
};
