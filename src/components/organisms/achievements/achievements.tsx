import { type FC } from 'react';
import { Achievement } from 'components/molecules/achievement';
import { useAppSelector } from 'store';
import { selectAchievements } from 'store/achievements/selectors';
import styles from './achievements.module.scss';
import { AchievementsProps } from './types';

/**
 * Компонент блока ачивок и всплывающего окна
 */

export const Achievements: FC<AchievementsProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dataAchievements = useAppSelector(selectAchievements);

  return (
    <div className={styles.achievements}>
      <div>
        <div className={styles.achievementsFlex}>
          {dataAchievements.map((item) => (
            <Achievement
              id={0}
              // eslint-disable-next-line react/jsx-no-bind
              onMouseEnter={function (): void {}}
              // eslint-disable-next-line react/jsx-no-bind
              onMouseLeave={function (): void {}}
              key={item.name}
              {...item}
              title={item.name}
              src={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
