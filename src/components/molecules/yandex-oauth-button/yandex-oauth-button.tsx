/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src =
      'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js';
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта`));
    document.head.appendChild(script);
  });

  promise
    .then(() => {
      window.YaAuthSuggest.init(
        {
          client_id: 'b3be356844ef4136bb188934b323a609',
          response_type: 'token',
          redirect_uri: 'https://localhost',
        },
        'https://localhost',
        {
          view: 'button',
          parentId: 'frame',
          buttonView: 'main',
          buttonTheme: 'dark',
          buttonSize: 'm',
          buttonBorderRadius: 0,
        }
      )
        .then(({ status, handler }) => {
          if (status === 'ok') {
            handler();
          }
        })
        .then((data) => console.log('Сообщение с токеном', data))
        .catch((error) => console.log('Обработка ошибки', error));
    })
    .catch((err) => console.log('Ошибка: ', err));

  return (
    <>
      <button
        {...props}
        className={classnames(styles.button, className)}
        type="button"
      >
        <Icon type="yandex" className={styles.icon} />
        Войти c Яндекс ID
      </button>
      <iframe id="frame" title="frame" />
    </>
  );
};
