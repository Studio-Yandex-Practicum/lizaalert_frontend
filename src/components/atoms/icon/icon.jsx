import PropTypes from 'prop-types';
import styles from './icon.module.scss';
import icons from './icons';

/**
 * @description Компонент адаптивной иконки, возвращает инлайновый `svg`, обернутый в `span`. Может наследовать свойство `color`.
 *
 * - type - string - тип иконки, должен совпадать по ключу с объектом icons
 * - maxWidth - string | number - максимальная ширина иконки, по умолчанию наследуется
 * - height - string | number - фиксированная высота иконки, с осторожностью, по умолчанию наследуется
 * - maxHeight - string | number - максимальная высота иконки, по умолчанию наследуется
 * - className - string - css-класс, присваивается `span`у
 * - onClick - func - необязательный props, функция, которая срабатывает при клике
 */
function Icon({ type, maxWidth, height, maxHeight, className, onClick }) {
  const classNames = `${styles.icon} ${className}`.trim();

  // инлайновые стили для большей гибкости компонента
  let inlineStyle = {};

  if (maxWidth !== 'inherit') inlineStyle = { ...inlineStyle, maxWidth };
  if (height !== 'inherit') inlineStyle = { ...inlineStyle, height };
  if (maxHeight !== 'inherit') inlineStyle = { ...inlineStyle, maxHeight };

  if (icons[type]) {
    return (
      <span
        className={classNames}
        style={inlineStyle}
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex={0}
      >
        {icons[type]}
      </span>
    );
  }

  return null;
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  maxWidth: 'inherit',
  height: 'inherit',
  maxHeight: 'inherit',
  className: '',
  onClick: () => {},
};

export default Icon;
