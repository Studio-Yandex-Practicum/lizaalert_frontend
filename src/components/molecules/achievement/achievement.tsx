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
  issued_for,
}) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [title, setTitle] = useState('');
  const [issuedFor, setIssuedFor] = useState('');
  const [srcImg, setSrcImg] = useState('');
  const toolTipClasses = showToolTip
    ? `${styles.achievement} ${styles.customClass}`
    : `${styles.achievement}`;

  const MouseEnterHendler = () => {
    setSrcImg(image);
    setTitle(name);
    setIssuedFor(issued_for);
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
        <img className={styles.achievementImg} src={image} alt="Награда" />
      </div>
    </>
  );
};
