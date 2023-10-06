export type CourseOverviewProps = {
  /** id курса. */
  id: number;
  /** Уровень (квалификация) курса. */
  level: string;
  /** Дата начала занятий. */
  startDate: string;
  /** URL обложки курса. */
  coverPath?: Nullable<string>;
  /** Количество уроков в курсе. */
  lessonsCount: number;
  /** Статус подписки на курс. */
  userStatus: 'True' | 'False';
  /** Продолжительность курса в часах. */
  courseDuration?: Nullable<number>;
  /** Обработчик клика по кнопке. */
  onClick?: VoidFunction;
};
