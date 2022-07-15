import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms/icon';
import styles from './button.module.scss';
import { ButtonProps } from './types';

/**
 * @description Компонент кнопки с иконкой или без.
 *
 * @props
 * - children - string - текст кнопки, имеет приоритет перед `text`
 * - text - string - текст кнопки, альтернатива для `children`
 * - view - string - внешний вид кнопки: 'primary', 'secondary', 'text'
 * - iconName - string - имя иконки из объекта icons
 * - iconPosition - string - позиционирование иконки слева/справа от текста: 'back', 'forward'
 * - className - string - класс-миксин
 * - type - string - тип кнопки: 'button', 'submit'
 * - classNameIcon - string - класс-миксин
 * - стандартные атрибуты HTML для `<button>`
 */

function Button({
  children = null,
  text = '',
  view = 'primary',
  iconName = null,
  iconPosition = null,
  className = '',
  type = 'button',
  classNameIcon = '',
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const btnClasses = classnames(
    styles.button,
    styles[view],
    { [styles[iconPosition ?? '']]: iconPosition },
    className
  );

  return (
    <button
      {...props}
      className={btnClasses}
      type={type === 'submit' ? 'submit' : 'button'}
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

export default Button;
