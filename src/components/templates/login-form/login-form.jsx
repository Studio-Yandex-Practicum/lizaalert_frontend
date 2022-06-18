import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Heading } from '../../atoms';
import { Button, Checkbox, Input } from '../../molecules';
import styles from './login-form.module.scss';
import { useFormWithValidation } from '../../../hooks';
import { fetchAuth } from '../../../store/auth/thunk';
import { selectIsAuth, selectIsLoading } from '../../../store/auth/selectors';
import routes from '../../../config/routes';
import { errorMessages, patterns } from '../../../utils/constants';

function LoginForm() {
  const [isCheckedRememberMe, setIsCheckedRememberMe] = useState(false);
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const { profile } = routes;

  useEffect(() => {
    if (isAuth) {
      navigate(profile.path);
    }
  }, [isAuth]);

  const handleChangeCheckbox = (evt) => {
    setIsCheckedRememberMe(evt.target.checked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const authData = {
      user: {
        email: values.userEmail,
        tel: values.userTel,
        password: values.userPassword,
      },
      isRememberMe: isCheckedRememberMe,
    };

    dispatch(fetchAuth(authData));
  };

  return (
    <Card className={styles.container}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <Heading
          level={3}
          title="Войти в профиль"
          size="l"
          className={styles.auhtForm__heading}
        />
        <Input
          labelName="Email"
          inputName="userEmail"
          type="email"
          value={values?.userEmail || ''}
          placeholder="Введите адрес электронной почты"
          pattern={patterns.email}
          error={errors.userEmail}
          message={errorMessages.email}
          onChange={handleChange}
          required
        />
        <Input
          labelName="Номер телефона"
          inputName="userTel"
          type="tel"
          value={values?.userTel || ''}
          placeholder="+7 ( ___ ) ___  -  ___"
          pattern={patterns.tel}
          error={errors.userTel || ''}
          message={errorMessages.tel}
          onChange={handleChange}
          required
        />
        <Input
          labelName="Пароль"
          inputName="userPassword"
          type="password"
          value={values?.userPassword || ''}
          placeholder=""
          error={errors.userPassword}
          onChange={handleChange}
          required
        />
        <div className={styles.linksContainer}>
          <Checkbox
            className={styles.authForm__checkbox}
            name="isSavedData"
            value="Сохранить"
            labelText="Сохранить данные входа"
            checked={isCheckedRememberMe}
            onChange={handleChangeCheckbox}
          />
          <Link to="." className={styles.textLink}>
            Забыли пароль?
          </Link>
        </div>
        <Button
          className={styles.button}
          type="submit"
          iconPosition="back"
          disabled={!isValid || isLoading}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </Button>
        <Button
          className={classnames(styles.button, styles.button_color_black)}
          classNameIcon={styles.icon}
          type="button"
          iconName="yandex"
          iconPosition="back"
        >
          Войти c Яндекс ID
        </Button>
      </form>
    </Card>
  );
}

export default LoginForm;
