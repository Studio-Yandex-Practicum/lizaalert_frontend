import { useState, FC } from 'react';
import { Achievement } from '../achievement/achievement';
import type { TooltipProps } from './types';
import styles from './tooltip.module.scss';

/**
 * Компонент tooltip.
 */
export const Tooltip: FC<TooltipProps> = ({ title, issuedFor, src }) => {
  // console.log('%cDATA', 'color: green');
  const [showToolTip, setShowToolTip] = useState(false);
  const [, setTitleState] = useState('');
  const [, setIssuedForState] = useState('');
  const [, setSrcImg] = useState('');

  const MouseEnterHandler = () => {
    setSrcImg(src);
    setTitleState(title);
    setIssuedForState(issuedFor);
    setShowToolTip(true);
  };

  const MouseLeaveHandler = () => {
    setTitleState('');
    setIssuedForState('');
    setSrcImg('');
    setShowToolTip(false);
  };

  return (
    <Achievement
      mouseLeaveHandler={MouseLeaveHandler}
      mouseEnterHandler={MouseEnterHandler}
      showToolTip={false}
    >
      <div className={styles.tooltip}>
        {showToolTip && (
          <div className={styles.tooltipRows}>
            <div className={styles.tooltipRowTitle}>
              <img
                className={styles.tooltipRowTitleImg}
                src={src}
                alt="Награда"
              />
              <p className={styles.tooltipRowTitleText}>{title}</p>
            </div>
            <div className={styles.tooltipRowText}>{issuedFor}</div>
          </div>
        )}
      </div>
    </Achievement>
  );
};
