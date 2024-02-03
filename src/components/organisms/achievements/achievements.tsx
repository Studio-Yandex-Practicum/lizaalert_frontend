import { type FC } from 'react';
import { useAppSelector } from 'store';
import { selectAchievements } from 'store/achievements/selectors';
import { Tooltip } from 'components/molecules/tooltip/tooltip';
import { AchievementsProps } from './types';

/**
 * Компонент блока ачивок и всплывающего окна - tooltip
 */

export const Achievements: FC<AchievementsProps> = ({ className }) => {
  const achievements = useAppSelector(selectAchievements);
  return (
    <div className={className}>
      {achievements.length < 1
        ? null
        : achievements.map((item) => (
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
