import classnames from 'classnames';
import styles from './icon.module.scss';
import icons, { IconsType } from './icons';

export type IconProps = {
  type: keyof IconsType;
  maxWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  onClick?: (...args: unknown[]) => void;
  className?: string;
};

const defaultProps = {
  maxWidth: 'inherit',
  height: 'inherit',
  maxHeight: 'inherit',
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
 * - maxWidth - string | number - максимальная ширина иконки, по умолчанию наследуется
 * - height - string | number - фиксированная высота иконки, с осторожностью, по умолчанию наследуется
 * - maxHeight - string | number - максимальная высота иконки, по умолчанию наследуется
 * - onClick - function - функция-обработчик клика, при её передаче вместо `span` будет `button`
 * - className - string - css-класс, присваивается `span`у
 */

function Icon({
  type,
  maxWidth,
  height,
  maxHeight,
  onClick,
  className,
}: IconProps) {
  if (!icons[type]) {
    return null;
  }

  let inlineStyle = {};

  if (maxWidth !== 'inherit') inlineStyle = { ...inlineStyle, maxWidth };
  if (height !== 'inherit') inlineStyle = { ...inlineStyle, height };
  if (maxHeight !== 'inherit') inlineStyle = { ...inlineStyle, maxHeight };

  if (onClick) {
    return (
      <button
        type="button"
        className={classnames(styles.icon, className)}
        style={inlineStyle}
        onClick={onClick}
      >
        {icons[type]}
      </button>
    );
  }

  return (
    <span className={classnames(styles.icon, className)} style={inlineStyle}>
      {icons[type]}
    </span>
  );
}

Icon.defaultProps = defaultProps;

export default Icon;
