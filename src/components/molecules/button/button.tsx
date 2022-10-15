import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './button.module.scss';
import { ButtonProps } from './types';

/**
 * Компонент кнопки с иконкой или без.
 * Также в качестве props принимает все стандартные HTML-атрибуты для кнопки.
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
}: ButtonProps) {
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
