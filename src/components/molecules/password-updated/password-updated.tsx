import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../button';
import styles from './password-updated.module.scss';
import { PasswordUpdatedProps } from './types';

/**
 * @description Компонент-сообщение отправки нового пароля. Стилизован под карточку.
 * Имеет заголовок, текст сообщения и кнопку "Войти".
 *
 * @props
 * - onButtonClick - function, required - обработчик клика по кнопке
 * */

function PasswordUpdated({ onButtonClick }: PasswordUpdatedProps) {
  return (
    <Card className={styles.container}>
      <Heading
        className={styles.heading}
        level={3}
        title="Пароль отправлен"
        size="l"
      />
      <p className={styles.text}>
        Мы отправили новый пароль на вашу электронную почту
      </p>
      <Button
        type="button"
        iconPosition="back"
        text="Войти"
        onClick={onButtonClick}
      />
    </Card>
  );
}

export default PasswordUpdated;
