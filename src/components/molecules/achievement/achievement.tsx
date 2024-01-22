import { useState, FC } from 'react';
import { Tooltip } from '../tooltip/tooltip';
import type { AchievementProps } from './types';
import styles from './achievement.module.scss';

/**
 * Компонент ачивки.
 */

export const Achievement: FC<AchievementProps> = ({
  image,
  name,
  issuedFor,
}) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [title, setTitle] = useState('');
  const [issuedForState, setIssuedForState] = useState('');
  const [srcImg, setSrcImg] = useState('');
  const toolTipClasses = showToolTip
    ? `${styles.achievement} ${styles.customClass}`
    : `${styles.achievement}`;

  const MouseEnterHendler = () => {
    setSrcImg(image);
    setTitle(name);
    setIssuedForState(issuedFor);
    setShowToolTip(true);
  };

  const MouseLeaveHendler = () => {
    setTitle('');
    setIssuedForState('');
    setSrcImg('');
    setShowToolTip(false);
  };

  return (
    <>
      <Tooltip
        showToolTip={showToolTip}
        issuedFor={issuedForState}
        title={title}
        src={srcImg}
      />
      <div
        className={toolTipClasses}
        onMouseEnter={() => {
          MouseEnterHendler();
        }}
        onMouseLeave={() => {
          MouseLeaveHendler();
        }}
      >
        <img className={styles.achievementImg} src={image} alt="Награда" />
      </div>
    </>
  );
};
