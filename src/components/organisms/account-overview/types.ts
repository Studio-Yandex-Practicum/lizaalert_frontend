export type AccountOverviewType = {
  /** ФИО пользователя. */
  userName: string;
  /** Ранг пользователя. */
  userStatus: string;
  /** Роль пользователя. */
  userOccupation: string;
  /** Количество пройденный курсов. */
  coursesFinished: number;

  // issuedFor: string;
  key?: number;

  // srcImg: string;

  src: string;
  // customClass?: string;
};

export type AchievementType = {
  // Набор данных для каждой ачивки
  name: string;
  description: string;
  image: string;
  badge_type: string;
  badge_category: string;
  issued_for: string;
  threshold_courses: null;
  threshold_course: null;
};

export type AchievementsType = AchievementType[];
