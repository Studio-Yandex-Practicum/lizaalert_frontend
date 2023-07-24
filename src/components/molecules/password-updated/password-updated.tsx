import type { FC } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading, P } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import styles from './password-updated.module.scss';
import type { PasswordUpdatedProps } from './types';

/**
 * Компонент-сообщение отправки нового пароля. Стилизован под карточку.
 * Имеет заголовок, текст сообщения и кнопку "Войти".
 * */

export const PasswordUpdated: FC<PasswordUpdatedProps> = ({
  onButtonClick,
  className,
}) => (
  <Card className={classnames(styles.container, className)}>
    <Heading level={3} weight="bold" text="Пароль отправлен" size="l" />

    <P
      textAlign="center"
      className={styles.text}
      text="Мы отправили новый пароль на вашу электронную почту"
    />

    <Button type="button" text="Войти" onClick={onButtonClick} />
  </Card>
);
