import { Card, Heading } from '../../atoms';
import Button from '../button/button';
import styles from './password-updated.module.scss';

function PasswordUpdated() {
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
      <Button type="button" iconPosition="back" text="Войти" />
    </Card>
  );
}

export default PasswordUpdated;
