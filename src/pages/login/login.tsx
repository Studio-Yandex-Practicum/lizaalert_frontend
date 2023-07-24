import type { FC } from 'react';
import { Heading } from 'components/atoms/typography';
import { LoginForm } from 'components/organisms/login-form';
import styles from './login.module.scss';

const Login: FC = () => (
  <>
    <Heading
      level={2}
      text="Авторизация"
      size="xxl"
      weight="bold"
      textAlign="center"
      className={styles.heading}
    />
    <LoginForm />
  </>
);

export default Login;
