import classnames from 'classnames';
import styles from './icon.module.scss';
import type { IconProps } from './types';
import { icons } from './icons';

/**
 * Компонент адаптивной иконки, возвращает инлайновый `svg`, обернутый в `span`. Может наследовать свойство `color`.
 */

function Icon({ type, size = 'default', className = '' }: IconProps) {
  if (!type) {
    return null;
  }

  return (
    <span className={classnames(styles.icon, styles[size], className)}>
      {icons[type]}
    </span>
  );
}

export default Icon;
