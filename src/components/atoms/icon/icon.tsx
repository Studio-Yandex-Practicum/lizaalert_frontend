import classnames from 'classnames';
import styles from './icon.module.scss';
import { IconProps } from './types';
import icons from './icons';

/**
 * @description Компонент адаптивной иконки, возвращает инлайновый `svg`, обернутый в `span`. Может наследовать свойство `color`.
 *
 * @props
 * - type - string, required - тип иконки, должен совпадать по ключу с объектом icons
 * - onClick - function - функция-обработчик клика, при её передаче вместо `span` будет `button`
 * - className - string - css-класс, присваивается `span`у
 */

function Icon({ type, onClick, className = '' }: IconProps) {
  if (!icons[type]) {
    return null;
  }

  if (onClick) {
    return (
      <button
        type="button"
        className={classnames(styles.icon, className)}
        onClick={onClick}
      >
        {icons[type]}
      </button>
    );
  }

  return (
    <span className={classnames(styles.icon, className)}>{icons[type]}</span>
  );
}

export default Icon;
