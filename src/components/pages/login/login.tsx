import { Heading } from 'components/atoms/heading';
import { LoginForm } from 'components/organisms/login-form';
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
