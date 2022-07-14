import classnames from 'classnames';
import styles from './icon.module.scss';
import icons from './icons';

export type IconType = keyof typeof icons;

export type IconProps = {
  type: IconType;
  onClick?: (...args: unknown[]) => void;
  className?: string;
};

const defaultProps = {
  onClick: undefined,
  className: '',
};

/**
 * @description Компонент адаптивной иконки, возвращает инлайновый `svg`, обернутый в `span`. Может наследовать свойство `color`.
 * Для стилизации иконки лучше использовать css-миксин через пропс `className`.
 * В пропсы `maxWidth`, `height`, `maxHeight` передаются стили для инлайна, они будут прибиты гвоздями и не подойдут для медиазапросов.
 *
 * @props
 * - type - string, required - тип иконки, должен совпадать по ключу с объектом icons
 * - onClick - function - функция-обработчик клика, при её передаче вместо `span` будет `button`
 * - className - string - css-класс, присваивается `span`у
 */

function Icon({ type, onClick, className }: IconProps) {
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

Icon.defaultProps = defaultProps;

export default Icon;
