import type { FC } from 'react';
import { Heading } from 'components/atoms/typography';
import { RegisterForm } from 'components/organisms/register-form';
import React from 'react';
import styles from './register.module.scss';

const Register: FC = () => (
  <>
    <Heading
      level={2}
      text="Регистрация"
      size="xxl"
      weight="bold"
      textAlign="center"
      className={styles.heading}
    />
    <RegisterForm />
  </>
);

export default Register;
