import { type FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { YANDEX_CLIENTID } from 'config';
import styles from './yandex-oauth-button.module.scss';
import type { YandexOAuthButtonProps } from './types';

const yandexOauthRedirectUri = `${window.location.origin}/auth`;
const yandexOauthLink = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_CLIENTID}&redirect_uri=${yandexOauthRedirectUri}`;

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
    window.location.assign(yandexOauthLink);
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
