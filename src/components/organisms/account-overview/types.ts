export type AccountOverviewType = {
  /** ФИО пользователя. */
  full_name: string | null;
  /** Ранг пользователя. */
  call_sign: string | null;
  /** Роль пользователя. */
  department: string | null;
  /** Количество пройденный курсов. */
  count_pass_course: number | null;
  /** Аватар пользователя */
  photo: string | null;
};
