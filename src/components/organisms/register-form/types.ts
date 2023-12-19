import { UserDataFieldNames } from 'utils/constants';

export type UserRegisterFormData = {
  /** Email пользователя. */
  [UserDataFieldNames.Email]: string;
  /** Номер телефона пользователя. */
  [UserDataFieldNames.Phone]: string;
  /** Пароль от аккаунта пользователя. */
  [UserDataFieldNames.Password]: string;
  /** Подтверждение пароля */
  [UserDataFieldNames.ConfirmPassword]: string;
};
