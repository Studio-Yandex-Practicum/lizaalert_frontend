import { UserDataFieldNames } from 'utils/constants';
// TODO: https://linear.app/lizaalert/issue/TM-40/dobavlenie-polya-nickname

export type PersonalFormData = {
  /** ФИО пользователя. */
  [UserDataFieldNames.Name]: string | null;
  /** Дата рождения пользователя в формате YYYY-MM-DD. */
  [UserDataFieldNames.DateOfBirth]: string | null;
  /** Регион проживания пользователя. */
  [UserDataFieldNames.Region]: string | null;
  /** Позывной пользователя в организации. */
  // [UserDataFieldNames.Nickname]: string | null;
  /** URL к аватару пользователя. */
  [UserDataFieldNames.Avatar]?: string | null;
};
