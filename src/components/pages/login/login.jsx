import { Heading } from '../../atoms';
import { LoginForm } from '../../templates';

import styles from './login.module.scss';

function Login() {
  return (
    <>
      <Heading
        level={2}
        title="Автворизация"
        size="xxl"
        className={styles.heading}
      />
      <LoginForm />
    </>
  );
}

export default Login;
