import { UserDataFieldNames } from 'utils/constants';

export type AccountFormData = {
  /** Номер телефона пользователя. */
  [UserDataFieldNames.Phone]: string;
  /** Email пользователя. */
  [UserDataFieldNames.Email]: string;
};
