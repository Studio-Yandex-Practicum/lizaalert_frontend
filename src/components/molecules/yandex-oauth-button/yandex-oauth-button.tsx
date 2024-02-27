/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type FC } from 'react';
import classnames from 'classnames';
import styles from './yandex-oauth-button.module.scss';
import type { YandexOAuthButtonProps } from './types';

/**
 * Компонент кнопки авторизации через Яндекс ID с иконкой-логотипом Яндекса.
 * Содержит собственную разметку, т.к. дизайн кнопки строго регламентирован Яндексом и не зависит от остальных кнопок проекта.
 * Документация оформления кнопки: https://yandex.ru/dev/id/doc/ru/codes/buttons-design
 */

export const YandexOAuthButton: FC<YandexOAuthButtonProps> = ({
  className,
}) => {
  const promise = new Promise((resolve, reject) => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content =
      "script-src 'self' 'unsafe-inline' https://passport.yandex.ru https://yastatic.net; style-src 'self' 'unsafe-inline' https://yastatic.net; child-src https://passport.yandex.ru; frame-src https://passport.yandex.ru https://autofill.yandex.ru; connect-src https://passport.yandex.ru https://autofill.yandex.ru;";
    document.head.appendChild(meta);
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
          redirect_uri: 'http://localhost:3000',
        },
        'http://localhost:3000',
        {
          view: 'button',
          parentId: 'button',
          buttonView: 'main',
          buttonTheme: 'light',
          buttonSize: 'xs',
          buttonBorderRadius: 50,
        }
      )
        .then(({ handler }) => handler())
        .then((data) => console.log('Сообщение с токеном', data))
        .catch((error) => console.log('Обработка ошибки', error));
    })
    .catch((err) => console.log(err));

  return <div id="button" className={classnames(styles.button, className)} />;
};
