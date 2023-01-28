import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Checkbox } from 'components/molecules/checkbox';
import { Input } from 'components/molecules/input';
import { StyledLink } from 'components/molecules/styled-link';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchAuth } from 'store/auth/thunk';
import { selectIsAuth, selectIsLoading } from 'store/auth/selectors';
import useFormWithValidation from 'hooks/use-form-with-validation';
import { routes } from 'config';
import { ErrorMessages, Patterns } from 'utils/constants';
import styles from './login-form.module.scss';
import type { UserLoginFormData } from './types';

/**
 * Компонент-форма логина пользователя.
 * */

function LoginForm() {
  const [isCheckedRememberMe, setIsCheckedRememberMe] = useState(false);

  const { values, handleChange, errors, isValid } =
    useFormWithValidation<UserLoginFormData>();
  const navigate = useNavigate();
  const { profile } = routes;

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>(selectIsLoading);
  const isAuth = useAppSelector<boolean>(selectIsAuth);

  useEffect(() => {
    if (isAuth) {
      navigate(profile.path);
    }
  }, [isAuth]);

  const handleChangeCheckbox = (evt: ChangeEvent<HTMLInputElement>) => {
    setIsCheckedRememberMe(evt.target.checked);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = {
      user: values,
      isRememberMe: isCheckedRememberMe,
    };
    // TODO пофиксить тайпинги после типизации стора
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    void dispatch(fetchAuth(data));
  };

  return (
    <Card className={styles.container} htmlTag="section">
      <Typography
        htmlTag="h3"
        text="Войти в профиль"
        size="l"
        weight="bold"
        className={styles.heading}
      />

      <form onSubmit={handleSubmit} name="authForm" className={styles.form}>
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

        <div className={styles.linksContainer}>
          <Checkbox
            className={styles.checkbox}
            weight="medium"
            name="isSavedData"
            value="Сохранить"
            labelText="Сохранить данные входа"
            checked={isCheckedRememberMe}
            onChange={handleChangeCheckbox}
          />
          <StyledLink
            href="."
            className={styles.textLink}
            linkText="Забыли пароль?"
          />
        </div>

        <Button
          className={styles.button}
          type="submit"
          disabled={!isValid || isLoading}
          text={isLoading ? 'Вход...' : 'Войти'}
        />
      </form>

      <Button
        className={classnames(styles.button)}
        classNameIcon={styles.icon}
        view="tertiary"
        iconName="yandex"
        iconSize="medium"
        text="Войти c Яндекс ID"
      />
    </Card>
  );
}

export default LoginForm;
