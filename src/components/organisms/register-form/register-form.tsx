import type { FC } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { StyledLink } from 'components/molecules/styled-link';
import { routes } from 'config';
import { PHONE_MASK, UserDataFieldNames } from 'utils/constants';
import { getValidationSchema } from 'utils/validation';
import { useAppDispatch } from 'store';
import { fetchRegistration } from 'store/auth/thunk';
import type { UserRegisterFormData } from './types';
import styles from './register-form.module.scss';

const schema = getValidationSchema<UserRegisterFormData>(
  UserDataFieldNames.Email,
  UserDataFieldNames.Phone,
  UserDataFieldNames.Password,
  UserDataFieldNames.ConfirmPassword
);

const initialValues: UserRegisterFormData = {
  [UserDataFieldNames.Email]: '',
  [UserDataFieldNames.Phone]: '',
  [UserDataFieldNames.Password]: '',
  [UserDataFieldNames.ConfirmPassword]: '',
};

/**
 * Компонент-форма регистрации пользователя.
 * */

export const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: UserRegisterFormData,
    { validateForm }: FormikHelpers<UserRegisterFormData>
  ) => {
    await validateForm(values);

    void dispatch(
      fetchRegistration({
        ...values,
        username: values.email,
      })
    );
  };

  const formik = useFormik<UserRegisterFormData>({
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
        text="Зарегистрироваться"
        size="l"
        weight="bold"
        className={styles.heading}
      />

      <form
        onSubmit={formik.handleSubmit}
        name="registerForm"
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
          mask={PHONE_MASK}
          value={formik.values[UserDataFieldNames.Phone]}
          onChange={formik.handleChange}
          labelName="Номер телефона"
          name={UserDataFieldNames.Phone}
          type="tel"
          placeholder="+7 (___) ___-__-__"
          isValid={
            !formik.touched[UserDataFieldNames.Phone] ||
            !formik.errors[UserDataFieldNames.Phone]
          }
          error={formik.errors[UserDataFieldNames.Phone]}
        />
        <Input
          labelName="Пароль"
          name={UserDataFieldNames.Password}
          type="password"
          value={formik.values.password}
          placeholder=""
          isValid={
            !formik.touched[UserDataFieldNames.Password] ||
            !formik.errors[UserDataFieldNames.Password]
          }
          error={formik.errors[UserDataFieldNames.Password]}
          onChange={formik.handleChange}
        />
        <Input
          labelName="Подтверждение пароля"
          name={UserDataFieldNames.ConfirmPassword}
          type="password"
          value={formik.values[UserDataFieldNames.ConfirmPassword]}
          placeholder=""
          isValid={
            !formik.touched[UserDataFieldNames.ConfirmPassword] ||
            !formik.errors[UserDataFieldNames.ConfirmPassword]
          }
          error={formik.errors[UserDataFieldNames.ConfirmPassword]}
          onChange={formik.handleChange}
        />
        <Button
          className={styles.button}
          type="submit"
          disabled={areAllValuesSet && (formik.isSubmitting || !formik.isValid)}
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
