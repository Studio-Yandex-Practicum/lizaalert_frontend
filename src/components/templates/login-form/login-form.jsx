import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Card, Heading } from '../../atoms';
import { Button, Checkbox, Input } from '../../molecules';
import styles from './login-form.module.scss';
import { useFormWithValidation } from '../../../hooks';

function LoginForm({ onLogin, isLoading }) {
  const [isChecked, setIsChecked] = useState(false);

  const { values, handleChange, errors, isValid, setIsValid } =
    useFormWithValidation();

  const checkboxValue = isChecked ? 'Сохранить' : 'Не сохранять';

  useEffect(() => {
    setIsValid(false);
  }, []);

  const handleChangeCheckbox = (evt) => {
    setIsChecked(evt.target.checked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values.userEmail, values.userTel, values.userPassword, isChecked);
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
          error={errors.userEmail}
          onChange={handleChange}
          required
        />
        <Input
          labelName="Номер телефона"
          inputName="userTel"
          type="tel"
          value={values?.userTel || ''}
          placeholder="+7 ( ___ ) ___  -  ___"
          error={errors.userTel || ''}
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
            value={checkboxValue}
            labelText="Сохранить данные входа"
            checked={isChecked}
            onChange={handleChangeCheckbox}
          />
          <Link to="ds" className={styles.textLink}>
            Забыли пароль?
          </Link>
        </div>
        <Button
          className={styles.button}
          type="submit"
          iconPosition="back"
          disabled={!isValid}
        >
          {isLoading ? 'Войти...' : 'Войти'}
        </Button>
        <Button
          className={classnames(styles.button, styles.button_color_black)}
          classNameIcon={styles.icon}
          type="submit"
          iconName="yandex"
          iconPosition="back"
        >
          Войти c Яндекс ID
        </Button>
      </form>
    </Card>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoginForm;
