import { useEffect, type FC } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { Achievements } from 'components/organisms/achievements';
import { AppDispatch, useAppSelector } from 'store';
import { selectProfileOverview } from 'store/profile/selectors';
import { fetchAchievement } from 'store/achievements/thunk';
import defaultImg from 'assets/images/profile.jpg';
import type { AccountOverviewType } from './types';
import styles from './account-overview.module.scss';

/**
 * Компонент-карточка с информацией профиля пользователя.
 * */

export const AccountOverview: FC = () => {
  const accountOverview = useAppSelector<AccountOverviewType>(
    selectProfileOverview
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    void dispatch(fetchAchievement());
  }, []);

  return (
    <Card className={styles.accountOverview}>
      <div className={styles.avatarContainer}>
        {/* Заменить значение атрибута src на accountOverview.avatar когда будет готов бэкенд, сейчас оставлено для наглядности */}
        <img className={styles.avatar} src={defaultImg} alt="Фото профиля" />
      </div>

      <Heading level={3} weight="bold" className={styles.personalData}>
        {accountOverview.userName}
      </Heading>
      <Achievements className={styles.achievements} />
      <ul className={styles.accountMeta}>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            text={accountOverview.userStatus}
            iconType="rank"
          />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            text={accountOverview.userOccupation}
            iconType="role"
          />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            text={`Пройдено ${accountOverview.coursesFinished} курса`}
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
