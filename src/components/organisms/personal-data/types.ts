import { UserDataFieldNames } from 'utils/constants';

export type PersonalFormData = {
  /** ФИО пользователя. */
  [UserDataFieldNames.Name]: string;
  /** Дата рождения пользователя в формате YYYY-MM-DD. */
  [UserDataFieldNames.DateOfBirth]: string;
  /** Регион проживания пользователя. */
  [UserDataFieldNames.Region]: string;
  /** Позывной пользователя в организации. */
  [UserDataFieldNames.Nickname]: string;
  /** URL к аватару пользователя. */
  [UserDataFieldNames.Avatar]: string;
};
