export type PersonalFormData = {
  /**
   * ФИО пользователя.
   * */
  name: string;
  /**
   * Дата рождения пользователя в формате YYYY-MM-DD.
   * */
  dateOfBirth: string;
  /**
   * Регион проживания пользователя.
   * */
  region: string;
  /**
   * Позывной пользователя в организации.
   * */
  nickname: string;
  /**
   * URL к аватару пользователя.
   * */
  avatar: string;
};
