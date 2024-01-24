import { FC } from 'react';
// import { Tooltip } from '../tooltip/tooltip';
import type { AchievementProps } from './types';
import styles from './achievement.module.scss';

/**
 * Компонент ачивки.
 */

export const Achievement: FC<AchievementProps> = ({
  image,
  mouseEnterHandler,
  mouseLeaveHandler,
  showToolTip,
  children,
}) => {
  const toolTipClasses = showToolTip
    ? `${styles.achievement} ${styles.customClass}`
    : `${styles.achievement}`;
  return (
    <>
      {children}
      <div
        className={toolTipClasses}
        onMouseEnter={() => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          mouseEnterHandler();
        }}
        onMouseLeave={() => {
          mouseLeaveHandler();
        }}
      >
        <img className={styles.achievementImg} src={image} alt="Награда" />
      </div>
    </>
  );
};
