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

export type ButtonProps = {
  children?: string;
  view?: 'primary' | 'secondary' | 'text';
  iconName: string;
  iconPosition: 'back' | 'forward' | '';
  onClick?: (...args: unknown[]) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  minWidth?: string | number;
  classNameIcon?: string;
};

const defaultProps = {
  children: '',
  view: 'primary',
  // iconName: '',
  onClick: undefined,
  className: '',
  disabled: false,
  type: 'button',
  minWidth: 'inherit',
  classNameIcon: '',
};

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
}: ButtonProps) {
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

Button.defaultProps = defaultProps;

export default Button;
