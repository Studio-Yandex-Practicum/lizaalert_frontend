import { ChangeEvent, FC, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { YandexOAuthButton } from 'components/molecules/yandex-oauth-button';
import { Checkbox } from 'components/molecules/checkbox';
import { Input } from 'components/molecules/input';
import { StyledLink } from 'components/molecules/styled-link';
import { routes } from 'config';
import { UserDataFieldNames } from 'utils/constants';
import { getValidationSchema } from 'utils/validation';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchAuth } from 'store/auth/thunk';
import { selectIsAuthLoading } from 'store/auth/selectors';
import type { UserLoginFormData } from './types';
import styles from './login-form.module.scss';

const schema = getValidationSchema<UserLoginFormData>(
  UserDataFieldNames.Email,
  UserDataFieldNames.Password
);

const initialValues: UserLoginFormData = {
  [UserDataFieldNames.Email]: '',
  [UserDataFieldNames.Password]: '',
};

/**
 * Компонент-форма логина пользователя.
 * */

export const LoginForm: FC = () => {
  const [isCheckedRememberMe, setIsCheckedRememberMe] = useState(false);

  const dispatch = useAppDispatch();
  const isAuthLoading = useAppSelector(selectIsAuthLoading);

  const handleChangeCheckbox = (evt: ChangeEvent<HTMLInputElement>) => {
    setIsCheckedRememberMe(evt.target.checked);
  };

  const handleSubmit = async (
    values: UserLoginFormData,
    { validateForm }: FormikHelpers<UserLoginFormData>
  ) => {
    await validateForm(values);

    const data = {
      user: values,
      isRememberMe: isCheckedRememberMe,
    };

    void dispatch(fetchAuth(data));
  };

  const formik = useFormik<UserLoginFormData>({
    initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  const areAllValuesSet =
    Object.keys(formik.values).length === Object.keys(formik.touched).length;

  return (
    <Card className={styles.container} htmlTag="section">
      <Heading
        level={3}
        text="Войти в профиль"
        size="l"
        weight="bold"
        className={styles.heading}
      />

      <form
        onSubmit={formik.handleSubmit}
        name="authForm"
        className={styles.form}
        noValidate
      >
        <Input
          labelName="Email"
          name={UserDataFieldNames.Email}
          type="email"
          value={formik.values[UserDataFieldNames.Email]}
          placeholder="Введите адрес электронной почты"
          isValid={
            !formik.touched[UserDataFieldNames.Email] ||
            !formik.errors[UserDataFieldNames.Email]
          }
          error={formik.errors[UserDataFieldNames.Email]}
          onChange={formik.handleChange}
        />
        <Input
          labelName="Пароль"
          name={UserDataFieldNames.Password}
          type="password"
          value={formik.values[UserDataFieldNames.Password]}
          placeholder=""
          isValid={
            !formik.touched[UserDataFieldNames.Password] ||
            !formik.errors[UserDataFieldNames.Password]
          }
          error={formik.errors[UserDataFieldNames.Password]}
          onChange={formik.handleChange}
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
          className={classnames(styles.button, styles.submitButton)}
          type="submit"
          disabled={areAllValuesSet && (formik.isSubmitting || !formik.isValid)}
          text={isAuthLoading ? 'Вход...' : 'Войти'}
        />
      </form>

      <YandexOAuthButton className={styles.button} />

      <StyledLink
        href={routes.register.path}
        className={styles.registerLink}
        linkText="Зарегистрироваться"
      />
    </Card>
  );
};
