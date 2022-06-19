import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './button.module.scss';

/**
 * @description Компонент кнопки с иконкой или без.
 *
 * - children - string - текст кнопки
 * - view - string - внешний вид кнопки: 'primary', 'secondary', 'text'
 * - iconName - string - имя иконки из объекта icons
 * - iconPosition - string - позиционирование иконки слева/справа от текста: 'back', 'forward'
 * - onClick - function - функция-обработчик клика
 * - className - string - класс-миксин
 * - disabled - boolean - флаг отключения кнопки
 * - type - string - тип кнопки: 'button', 'submit'
 * - minWidth - string | number - инлайновый стиль минимальной ширины, прибивается гвоздями, по умолчанию наследуется
 * - classNameIcon - string - класс-миксин
 */

function Button({
  children,
  view,
  iconName,
  iconPosition,
  onClick,
  className,
  disabled,
  type,
  minWidth,
  classNameIcon,
}) {
  const btnClasses = classnames(
    styles.button,
    styles[view ?? 'primary'],
    { [styles[iconPosition]]: iconPosition },
    className
  );

  let inlineStyle = {};

  if (minWidth !== 'inherit') inlineStyle = { ...inlineStyle, minWidth };

  return (
    <button
      onClick={onClick}
      className={btnClasses}
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
      style={inlineStyle}
    >
      {iconPosition === 'back' && (
        <Icon
          type={iconName}
          className={classnames(styles.icon, classNameIcon)}
        />
      )}
      {children}
      {iconPosition === 'forward' && (
        <Icon
          type={iconName}
          className={classnames(styles.icon, classNameIcon)}
        />
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  view: PropTypes.oneOf(['primary', 'secondary', 'text']),
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf(['back', 'forward', '']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classNameIcon: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  view: 'primary',
  iconName: '',
  iconPosition: '',
  onClick: undefined,
  className: '',
  disabled: false,
  type: 'button',
  minWidth: 'inherit',
  classNameIcon: '',
};

export default Button;
