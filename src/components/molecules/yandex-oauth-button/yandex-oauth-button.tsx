import { type FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './yandex-oauth-button.module.scss';
import type { YandexOAuthButtonProps } from './types';

/**
 * Компонент кнопки авторизации через Яндекс ID с иконкой-логотипом Яндекса.
 * Содержит собственную разметку, т.к. дизайн кнопки строго регламентирован Яндексом и не зависит от остальных кнопок проекта.
 * Документация оформления кнопки: https://yandex.ru/dev/id/doc/ru/codes/buttons-design
 */

export const YandexOAuthButton: FC<YandexOAuthButtonProps> = ({
  className,
  ...props
}) => {
  const handleLogin = () => {
    window.location.href =
      'https://oauth.yandex.ru/authorize?response_type=token&client_id=b3be356844ef4136bb188934b323a609&redirect_uri=http://localhost:3000/auth';
  };

  return (
    <button
      {...props}
      className={classnames(styles.button, className)}
      onClick={handleLogin}
      type="button"
    >
      <Icon type="yandex" className={styles.icon} />
      Войти c Яндекс ID
    </button>
  );
};
