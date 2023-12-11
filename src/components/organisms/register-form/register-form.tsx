import type { FC } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { StyledLink } from 'components/molecules/styled-link';
import { routes } from 'config';
import { getValidationSchema } from 'utils/validation';
import { useAppDispatch } from 'store';
import { fetchRegistration } from 'store/auth/thunk';
import { PHONE_MASK } from 'utils/constants';
import type { UserRegisterFormData } from './types';
import styles from './register-form.module.scss';

const schema = getValidationSchema<UserRegisterFormData>(
  'email',
  'phone',
  'password',
  'confirmPassword'
);

const initialValues: UserRegisterFormData = {
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
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

    const data = {
      ...values,
      username: values.email,
    };

    void dispatch(fetchRegistration(data));
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
          name="email"
          type="email"
          value={formik.values.email}
          placeholder="Введите адрес электронной почты"
          isValid={!formik.touched.email || !formik.errors.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
        />
        <Input
          mask={PHONE_MASK}
          value={formik.values.phone}
          onChange={formik.handleChange}
          labelName="Номер телефона"
          name="phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          isValid={!formik.touched.phone || !formik.errors.phone}
          error={formik.errors.phone}
        />
        <Input
          labelName="Пароль"
          name="password"
          type="password"
          value={formik.values.password}
          placeholder=""
          isValid={!formik.touched.password || !formik.errors.password}
          error={formik.errors.password}
          onChange={formik.handleChange}
        />
        <Input
          labelName="Подтверждение пароля"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          placeholder=""
          isValid={
            !formik.touched.confirmPassword || !formik.errors.confirmPassword
          }
          error={formik.errors.confirmPassword}
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
