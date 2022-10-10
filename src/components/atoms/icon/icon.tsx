import classnames from 'classnames';
import styles from './icon.module.scss';
import { IconProps } from './types';
import { icons } from './icons';

/**
 * Компонент адаптивной иконки, возвращает инлайновый `svg`, обернутый в `span`. Может наследовать свойство `color`.
 *
 * @props
 * - type - string, required - тип иконки, должен совпадать по ключу с объектом icons
 * - size - enum ('default' | 'medium') - размер иконки. По умолчанию 'default'.
 * - onClick - function - функция-обработчик клика, при её передаче вместо `span` будет `button`
 * - className - string - css-класс, присваивается `span`у
 */

function Icon({ type, size = 'default', onClick, className = '' }: IconProps) {
  if (!type) {
    return null;
  }

  const classNames = classnames(styles.icon, styles[size], className);

  if (onClick) {
    return (
      <button type="button" className={classNames} onClick={onClick}>
        {icons[type]}
      </button>
    );
  }

  return <span className={classNames}>{icons[type]}</span>;
}

export default Icon;
