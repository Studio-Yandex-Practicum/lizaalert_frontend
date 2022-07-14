import classnames from 'classnames';
import { Icon, IconType } from '../../atoms';
import styles from './button.module.scss';

export type ButtonProps = {
  children?: string;
  text?: string;
  view?: 'primary' | 'secondary' | 'text';
  iconName?: IconType;
  iconPosition?: 'back' | 'forward' | '';
  onClick?: (...args: unknown[]) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  minWidth?: string | number;
  classNameIcon?: string;
};

const defaultProps = {
  children: null,
  text: '',
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

/**
 * @description Компонент кнопки с иконкой или без.
 *
 * @props
 * - children - string - текст кнопки, имеет приоритет перед `text`
 * - text - string - текст кнопки, альтернатива для `children`
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
  text,
  view = 'primary',
  iconName,
  iconPosition = '',
  onClick,
  className,
  disabled,
  type,
  minWidth,
  classNameIcon,
}: ButtonProps) {
  const btnClasses = classnames(
    styles.button,
    styles[view],
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
      {iconPosition === 'back' && iconName && (
        <Icon type={iconName} className={classNameIcon} />
      )}
      {children ?? text}
      {iconPosition === 'forward' && iconName && (
        <Icon type={iconName} className={classNameIcon} />
      )}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
