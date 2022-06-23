import { Card, Heading } from '../../atoms';
import Button from '../button/button';

import styles from './success-updated-password.module.scss';

function SuccessUpdatedPassword() {
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
      <Button type="button" iconPosition="back">
        Войти
      </Button>
    </Card>
  );
}

export default SuccessUpdatedPassword;