import { Heading } from '../../atoms';
import { LoginForm } from '../../organisms';
import styles from './login.module.scss';

function Login() {
  return (
    <>
      <Heading
        level={2}
        title="Авторизация"
        size="xxl"
        className={styles.heading}
      />
      <LoginForm />
    </>
  );
}

export default Login;
