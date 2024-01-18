import { type FC } from 'react';
import { Achievement } from 'components/molecules/achievement';
import { useAppSelector } from 'store';
import { selectAchievements } from 'store/achievements/selectors';
import { AchievementsProps } from './types';
import styles from './achievements.module.scss';

/**
 * Компонент блока ачивок и всплывающего окна - tooltip
 */

export const Achievements: FC<AchievementsProps> = () => {
  const dataAchievements = useAppSelector(selectAchievements);

  return (
    <div className={styles.achievements}>
      <div>
        <div className={styles.achievementsFlex}>
          {dataAchievements.map((item) => (
            <Achievement
              key={item.name}
              issued_for={item.issued_for}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
