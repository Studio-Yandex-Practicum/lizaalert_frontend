export type ProfileModel = {
  id: string;
  /** URL к аватару пользователя. */
  photo: string | null;
  /** ФИО пользователя. */
  full_name: string;
  /** Роль пользователя. */
  department: string | null;
  /** Количество пройденный курсов. */
  count_pass_course: number | null;
  /** Дата рождения пользователя в формате YYYY-MM-DD. */
  birth_date: string | null;
  /** Регион проживания пользователя. */
  location: string | null;
  /** Ранг пользователя. */
  call_sign: string | null;
  /** Номер телефона пользователя. */
  phone_number: string;
  /** Email пользователя. */
  email: string;
};

export type AccountFormData = Pick<ProfileModel, 'email' | 'phone_number'>;

export type PersonalFormData = {
  photo: string;
  full_name: string;
  birth_date: string;
  location: string;
};
