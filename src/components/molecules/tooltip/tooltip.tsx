import { useState, FC } from 'react';
import { Typography } from 'components/atoms/typography';
import { Achievement } from '../achievement/achievement';
import type { TooltipProps } from './types';
import styles from './tooltip.module.scss';

/**
 * Компонент tooltip.
 */
export const Tooltip: FC<Omit<TooltipProps, 'showToolTip'>> = ({
  title,
  issuedFor,
  src,
}) => {
  const initialTooltipProps: TooltipProps = {
    showToolTip: false,
    issuedFor: '',
    title: '',
    src,
  };
  const [tooltipProps, setTooltipProps] =
    useState<TooltipProps>(initialTooltipProps);

  const handleMouseEnter = () => {
    setTooltipProps({
      issuedFor,
      showToolTip: true,
      title,
      src,
    });
  };

  const handleMouseLeave = () => {
    setTooltipProps(initialTooltipProps);
  };

  return (
    <Achievement
      handleMouseLeave={handleMouseLeave}
      handleMouseEnter={handleMouseEnter}
      showToolTip={tooltipProps.showToolTip}
      image={src}
    >
      <div className={styles.tooltip}>
        {tooltipProps.showToolTip && (
          <div className={styles.tooltipRows}>
            <div className={styles.tooltipRowTitle}>
              <img
                className={styles.tooltipRowTitleImg}
                src={src}
                alt="Награда"
              />
              <Typography className={styles.tooltipRowTitleText} htmlTag="p">
                {title}
              </Typography>
            </div>
            <Typography className={styles.tooltipRowText} htmlTag="p">
              {issuedFor}
            </Typography>
          </div>
        )}
      </div>
    </Achievement>
  );
};
