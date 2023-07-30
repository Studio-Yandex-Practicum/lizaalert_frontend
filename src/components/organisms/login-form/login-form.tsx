import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Checkbox } from 'components/molecules/checkbox';
import { Input } from 'components/molecules/input';
import { StyledLink } from 'components/molecules/styled-link';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchAuth } from 'store/auth/thunk';
import { selectIsAuth, selectIsAuthLoading } from 'store/auth/selectors';
import { useFormWithValidation } from 'hooks/use-form-with-validation';
import { routes } from 'config';
import { ErrorMessages, Patterns } from 'utils/constants';
import styles from './login-form.module.scss';
import type { UserLoginFormData } from './types';

/**
 * Компонент-форма логина пользователя.
 * */

export const LoginForm: FC = () => {
  const [isCheckedRememberMe, setIsCheckedRememberMe] = useState(false);

  const { values, handleChange, errors, isValid } =
    useFormWithValidation<UserLoginFormData>();
  const navigate = useNavigate();
  const { profile, register } = routes;

  const dispatch = useAppDispatch();
  // TODO удалить типы после типизации стора
  const isAuthLoading = useAppSelector<boolean>(selectIsAuthLoading);
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

  const goToRegister = () => navigate(register.path);

  return (
    <Card className={styles.container} htmlTag="section">
      <Heading
        level={3}
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
          disabled={!isValid || isAuthLoading}
          text={isAuthLoading ? 'Вход...' : 'Войти'}
        />
      </form>

      <Button
        className={classnames(styles.button, styles.registerButton)}
        text="Зарегистрироваться"
        onClick={goToRegister}
      />

      {/* TODO: вынести в компонент YandexOAuthButton */}
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
};
