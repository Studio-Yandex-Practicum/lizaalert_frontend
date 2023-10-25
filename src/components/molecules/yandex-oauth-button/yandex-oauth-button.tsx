import type { FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './yandex-oauth-button.module.scss';
import type { YandexOAuthButtonProps } from './types';

/**
 * Компонент кнопки авторизации через Яндекс ID с иконкой-логотипом Яндекса.
 * Содержит собственную разметку, т.к. дизайн кнопки строго регламентирован Яндексом и не зависит от остальных кнопок проекта.
 */

export const YandexOAuthButton: FC<YandexOAuthButtonProps> = ({
  text = 'Войти c Яндекс ID',
  className,
  iconSize = 'medium',
  ...props
}) => {
  const btnClasses = classnames(styles.button, className);
  return (
    <button {...props} className={btnClasses} type="button">
      <Icon type="yandex" size={iconSize} className={styles.icon} />
      {text}
    </button>
  );
};
