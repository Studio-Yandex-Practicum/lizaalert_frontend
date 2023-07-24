/* eslint-disable react/button-has-type */
// Тип кнопки типизирован и обозначено дефолтное значение.
import type { FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './button.module.scss';
import type { ButtonProps } from './types';

/**
 * Компонент кнопки с иконкой или без.
 * Также в качестве props принимает все стандартные HTML-атрибуты для кнопки.
 * По умолчанию имеет type="button".
 */

export const Button: FC<ButtonProps> = ({
  children = null,
  text = '',
  view = 'primary',
  hover = 'default',
  iconName = null,
  iconPosition = 'left',
  className,
  type = 'button',
  classNameIcon,
  iconSize = 'default',
  ...props
}) => {
  const btnClasses = classnames(
    styles.button,
    styles[`view-${view}`],
    {
      [styles[`hover-${hover}`]]: view === 'secondary',
      [styles.reverse]: iconPosition === 'right',
    },
    className
  );

  return (
    <button {...props} className={btnClasses} type={type}>
      {iconName && (
        <Icon type={iconName} size={iconSize} className={classNameIcon} />
      )}

      {children ?? text}
    </button>
  );
};
