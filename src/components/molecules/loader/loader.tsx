import type { FC } from 'react';
import classnames from 'classnames';
import styles from './loader.module.scss';
import type { LoaderProps } from './types';

const settings = {
  cx: 25,
  cy: 25,
  radius: 20,
  strokeWidth: 5,
  fill: 'none',
};

/**
 * Компонент-лоадер, обернутый в `div`-оверлей с полупрозрачным фоном в цвет основного `background`.
 * По умолчанию расположен по центру контейнера по обеим осям.
 * */

export const Loader: FC<LoaderProps> = ({ isFixed, isAbsolute, className }) => (
  <div
    className={classnames(
      styles.overlay,
      {
        [styles.overlay_pos_fixed]: isFixed,
        [styles.overlay_pos_absolute]: isAbsolute,
      },
      className
    )}
  >
    <svg className={styles.loader} viewBox="0 0 50 50">
      <circle
        className={styles.path}
        cx={settings.cx}
        cy={settings.cy}
        r={settings.radius}
        fill={settings.fill}
        strokeWidth={settings.strokeWidth}
      />
    </svg>
  </div>
);
