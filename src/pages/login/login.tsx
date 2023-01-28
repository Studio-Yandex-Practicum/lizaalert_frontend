import { Typography } from 'components/atoms/typography';
import { LoginForm } from 'components/organisms/login-form';
import styles from './login.module.scss';

function Login() {
  return (
    <>
      <Typography
        htmlTag="h2"
        text="Авторизация"
        size="xxl"
        weight="bold"
        textAlign="center"
        className={styles.heading}
      />
      <LoginForm />
    </>
  );
}

export default Login;
