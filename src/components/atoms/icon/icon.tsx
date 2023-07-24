import type { FC } from 'react';
import classnames from 'classnames';
import styles from './icon.module.scss';
import type { IconProps } from './types';
import { icons } from './icons';

/**
 * Компонент адаптивной иконки, возвращает инлайновый `svg`, обернутый в `span`. Может наследовать свойство `color`.
 */

export const Icon: FC<IconProps> = ({ type, size = 'default', className }) => {
  if (!type) {
    return null;
  }

  return (
    <span className={classnames(styles.icon, styles[size], className)}>
      {icons[type]}
    </span>
  );
};
