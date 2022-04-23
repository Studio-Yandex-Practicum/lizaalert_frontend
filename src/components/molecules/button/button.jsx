import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './button.module.scss';

/**
 * @description Компонент кнопки с икнокой или без.
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
        <Icon type={iconName} className={styles.icon} />
      )}
      {children}
      {iconPosition === 'forward' && (
        <Icon type={iconName} className={styles.icon} />
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  view: PropTypes.oneOf(['primary', 'secondary', 'text']),
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf(['back', 'forward', '']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
};

export default Button;
