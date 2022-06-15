import { Card, Heading } from '../../atoms';
import { Button, Input } from '../../molecules';
import styles from './password-restoration.module.scss';

function PasswordRestorarion() {
  return (
    <Card className={styles.passwordRestoration}>
      <Heading
        level={2}
        size="l"
        title="Восстановить пароль"
        className={styles.heading}
      />
      <form className={styles.form}>
        <Input
          labelName="Email"
          type="email"
          placeholder="Ведите адрес электронной почты"
        />
        <Button view="primary" className={styles.submitButton}>
          Отправить новый пароль
        </Button>
      </form>

      <Button
        view="secondary"
        iconPosition="back"
        iconName="arrowBack"
        className={styles.backButton}
      >
        Назад
      </Button>
    </Card>
  );
}

export default PasswordRestorarion;
