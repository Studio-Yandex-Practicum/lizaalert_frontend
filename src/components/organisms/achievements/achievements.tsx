import { type FC } from 'react';
import { useAppSelector } from 'store';
import { selectAchievements } from 'store/achievements/selectors';
import { Tooltip } from 'components/molecules/tooltip/tooltip';
import { AchievementsProps } from './types';
import styles from './achievements.module.scss';

/**
 * Компонент блока ачивок и всплывающего окна - tooltip
 */

export const Achievements: FC<AchievementsProps> = () => {
  const achievements = useAppSelector(selectAchievements);
  return (
    <div className={styles.achievements}>
      {achievements.length < 1 ? null : (
        <div className={styles.achievementsFlex}>
          {achievements.map((item) => (
            <Tooltip
              key={item.name}
              issuedFor={item.issued_for}
              title={item.name}
              src={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};
