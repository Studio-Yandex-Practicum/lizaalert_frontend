import type { FC, FormEvent } from 'react';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { StyledLink } from 'components/molecules/styled-link';
import { useFormWithValidation } from 'hooks/use-form-with-validation';
import { routes } from 'config';
import { ErrorMessages, Patterns } from 'utils/constants';
import type { UserRegisterFormData } from './types';
import styles from './register-form.module.scss';

/**
 * Компонент-форма регистрации пользователя.
 * */

export const RegisterForm: FC = () => {
  const { values, handleChange, errors, isValid } =
    useFormWithValidation<UserRegisterFormData>();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // TODO запрос на регистрацию
  };

  return (
    <Card className={styles.container} htmlTag="section">
      <Heading
        level={3}
        text="Зарегистрироваться"
        size="l"
        weight="bold"
        className={styles.heading}
      />

      <form onSubmit={handleSubmit} name="registerForm" className={styles.form}>
        <Input
          labelName="Email"
          name="email"
          type="email"
          value={values?.email || ''}
          placeholder="Введите адрес электронной почты"
          pattern={Patterns.email}
          isValid={!errors.email}
          error={ErrorMessages.email}
          onChange={handleChange}
          required
        />
        <Input
          labelName="Номер телефона"
          name="tel"
          type="tel"
          value={values?.tel || ''}
          placeholder="+7 ( ___ ) ___  -  ___"
          pattern={Patterns.tel}
          isValid={!errors.tel}
          error={ErrorMessages.tel}
          onChange={handleChange}
          required
        />
        <Input
          labelName="Пароль"
          name="password"
          type="password"
          value={values?.password || ''}
          placeholder=""
          isValid={!errors.password}
          error={errors.password}
          onChange={handleChange}
          required
        />
        <Input
          labelName="Подтверждение пароля"
          name="сonfirmPassword"
          type="password"
          value={values?.confirmPassword || ''}
          placeholder=""
          isValid={values.password === values.confirmPassword}
          error={ErrorMessages.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button
          className={styles.button}
          type="submit"
          disabled={!isValid}
          text="Регистрация"
        />
      </form>

      <StyledLink
        href={routes.login.path}
        className={styles.authLink}
        linkText="Войти"
      />
    </Card>
  );
};
