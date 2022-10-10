import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './button.module.scss';
import { ButtonProps } from './types';

/**
 * Компонент кнопки с иконкой или без.
 *
 * @props
 * - children - string - текст кнопки, имеет приоритет перед `text`
 * - text - string - текст кнопки, альтернатива для `children`
 * - view - enum ('primary' | 'secondary' | 'tertiary' | 'text') - внешний вид кнопки
 * - hover - enum ('default' | 'border') - внешний вид обводки кнопки
 * - iconName - string - имя иконки из объекта icons
 * - iconPosition - enum ('back' | 'forward') - позиционирование иконки слева/справа от текста
 * - iconSize - enum ('default' | 'medium') - размер иконки
 * - className - string - класс-миксин
 * - type - enum ('button' | 'submit') - тип кнопки
 * - classNameIcon - string - класс-миксин
 * - стандартные атрибуты HTML для `<button>`
 */

function Button({
  children = null,
  text = '',
  view = 'primary',
  hover = 'default',
  iconName = null,
  iconPosition = 'back',
  className = '',
  type = 'button',
  classNameIcon = '',
  iconSize = 'default',
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const btnClasses = classnames(
    styles.button,
    styles[`view-${view}`],
    { [styles[`hover-${hover}`]]: view === 'secondary' },
    className
  );

  return (
    <button
      {...props}
      className={btnClasses}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {iconPosition === 'back' && iconName && (
        <Icon type={iconName} size={iconSize} className={classNameIcon} />
      )}

      {children ?? text}

      {iconPosition === 'forward' && iconName && (
        <Icon type={iconName} size={iconSize} className={classNameIcon} />
      )}
    </button>
  );
}

export default Button;
