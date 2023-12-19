import { UserDataFieldNames } from 'utils/constants';

export type UserLoginFormData = {
  /** Email пользователя. */
  [UserDataFieldNames.Email]: string;
  /** Пароль от аккаунта пользователя. */
  [UserDataFieldNames.Password]: string;
};
