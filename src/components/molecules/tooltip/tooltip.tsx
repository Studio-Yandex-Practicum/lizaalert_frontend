import { FC } from 'react';
import type { TooltipProps } from './types';
import styles from './tooltip.module.scss';

/**
 * Компонент tooltip.
 */
export const Tooltip: FC<TooltipProps> = ({
  title,
  issuedFor,
  showToolTip,
  src,
}) => (
  <div className={styles.tooltip}>
    {showToolTip && (
      <div className={styles.tooltipRows}>
        <div className={styles.tooltipRowTitle}>
          <img className={styles.tooltipRowTitleImg} src={src} alt="Награда" />
          <p className={styles.tooltipRowTitleText}>{title}</p>
        </div>
        <div className={styles.tooltipRowText}>{issuedFor}</div>
      </div>
    )}
  </div>
);
