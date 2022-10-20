export type AccountOverviewType = {
  /**
   * ФИО пользователя.
   * */
  userName: string;
  /**
   * Ранг пользователя.
   * */
  userStatus: string;
  /**
   * Роль пользователя.
   * */
  userOccupation: string;
  /**
   * Количество пройденный курсов.
   * */
  coursesFinished: number;
};
