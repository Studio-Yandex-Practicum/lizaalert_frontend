import { useState, FC } from 'react';
import styles from './achievement.module.scss';
import type { AchievementProps } from './types';
import { Tooltip } from '../tooltip/tooltip';

/**
 * Компонент ачивки.
 */

export const Achievement: FC<AchievementProps> = ({ src, ...item }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [title, setTitle] = useState('');
  const [issuedFor, setIssuedFor] = useState('');
  const [srcImg, setSrcImg] = useState('');
  const toolTipClasses = showToolTip
    ? `${styles.achievement} ${styles.customClass}`
    : `${styles.achievement}`;

  const MouseEnterHendler = () => {
    setSrcImg(item.image);
    setTitle(item.name);
    setIssuedFor(item.issued_for);
    setShowToolTip(true);
  };

  const MouseLeaveHendler = () => {
    setTitle('');
    setIssuedFor('');
    setSrcImg('');
    setShowToolTip(false);
  };

  return (
    <>
      <div>
        <Tooltip
          showToolTip={showToolTip}
          issuedFor={issuedFor}
          title={title}
          src={srcImg}
        />
      </div>
      <div
        className={toolTipClasses}
        onMouseEnter={() => {
          MouseEnterHendler();
        }}
        onMouseLeave={() => {
          MouseLeaveHendler();
        }}
      >
        <img className={styles.achievementImg} src={src} alt="Награда" />
      </div>
    </>
  );
};
