import { FC } from 'react';
import classNames from 'classnames';
import type { AchievementProps } from './types';
import styles from './achievement.module.scss';

/**
 * Компонент ачивки.
 */

export const Achievement: FC<AchievementProps> = ({
  image,
  handleMouseEnter,
  handleMouseLeave,
  showToolTip,
  children,
}) => (
  <>
    {children}
    <div
      className={classNames(styles.achievement, {
        [styles.tooltipShown]: showToolTip,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={styles.image} src={image} alt="Награда" />
    </div>
  </>
);
