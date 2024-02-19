import type { FC } from 'react';
import classnames from 'classnames';
import { Tooltip } from 'components/molecules/tooltip/tooltip';
import { useAppSelector } from 'store';
import { selectAchievements } from 'store/achievements/selectors';
import { AchievementsProps } from './types';
import styles from './achievements.module.scss';

/**
 * Компонент блока ачивок и всплывающего окна - tooltip
 */

export const Achievements: FC<AchievementsProps> = ({ className }) => {
  const achievements = useAppSelector(selectAchievements);

  if (!achievements.length) {
    return null;
  }

  return (
    <div className={classnames(styles.achievements, className)}>
      {achievements.map((item) => (
        <Tooltip
          key={item.name}
          issuedFor={item.issued_for}
          title={item.name}
          src={item.image}
        />
      ))}
    </div>
  );
};
