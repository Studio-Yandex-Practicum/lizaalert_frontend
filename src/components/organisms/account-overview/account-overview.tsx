import { useEffect, type FC } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { COURSE_PLURAL } from 'utils/constants';
import { pluralize } from 'utils/pluralize';
import { Achievements } from 'components/organisms/achievements';
import { AppDispatch, useAppSelector } from 'store';
import { selectProfileOverview } from 'store/profile/selectors';
import { fetchAchievement } from 'store/achievements/thunk';
import defaultImg from 'assets/images/profile.png';
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
        <img
          className={styles.avatar}
          src={accountOverview.photo || defaultImg}
          alt="Фото профиля"
        />
      </div>

      <Heading level={3} weight="bold" className={styles.personalData}>
        {accountOverview.full_name}
      </Heading>
      <Achievements className={styles.achievements} />
      <ul className={styles.accountMeta}>
        {accountOverview.call_sign && (
          <li className={styles.accountMetaItem}>
            <TextWithIcon
              htmlTag="span"
              text={accountOverview.call_sign}
              iconType="rank"
            />
          </li>
        )}
        {accountOverview.department && (
          <li className={styles.accountMetaItem}>
            <TextWithIcon
              htmlTag="span"
              text={accountOverview.department}
              iconType="role"
            />
          </li>
        )}
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            text={`Пройдено ${
              accountOverview.count_pass_course || 0
            } ${pluralize(
              accountOverview.count_pass_course || 0,
              COURSE_PLURAL
            )}`}
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
