import { FC } from 'react';
import styles from './tooltip.module.scss';
import type { TooltipProps } from './types';

/**
 * Компонент tooltip.
 */

export const Tooltip: FC<TooltipProps> = ({
  title,
  issuedFor,
  showToolTip,
  src,
}) => (
  <div>
    {showToolTip && (
      <div className={styles.tooltip}>
        <div className={styles.tooltipRow}>
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
      </div>
    )}
  </div>
);
