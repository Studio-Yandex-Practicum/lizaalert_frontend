export type UserRegisterFormData = {
  name?: string | number | readonly string[] | undefined;
  /** Email пользователя. */
  email: string;
  /** Номер телефона пользователя. */
  phone: string;
  /** Пароль от аккаунта пользователя. */
  password: string;
  /** Подтверждение пароля */
  confirmPassword: string;
};
