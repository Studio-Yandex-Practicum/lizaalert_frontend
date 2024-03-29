import { UserProgressStatus } from 'api/course';

export type CoursePreviewModel = {
  /** id курса. */
  id: number;
  /** Заголовок-название курса. */
  title: string;
  /** Уровень, на который рассчитан курс. */
  level: string;
  /** Короткое описание курса. */
  short_description: string;
  /** Количество уроков в курсе. */
  lessons_count: number;
  /** Дата начала курса. */
  start_date: Nullable<string>;
  /** Продолжительность курса в часах. */
  course_duration: Nullable<number>;
  /** Статус курса. */
  course_status: 'active' | 'inactive' | 'finished' | 'booked';
  /** URL к обложке курса. */
  cover_path: Nullable<string>;
  /** Статус подписки пользователя на курс. */
  user_status?: UserProgressStatus;
};

export type GetCoursesData = {
  /** Порядковый номер загружаемой страницы. */
  page: number;
  /** Количество сущностей, которые нужно запросить. */
  pageSize: number;
  /** Остальные параметры */
  params?: { [key: string]: string };
};

export type CoursesModel = {
  /** Общее количество курсов в базе данных. */
  count: Nullable<number>;
  /** Список курсов. */
  results: CoursePreviewModel[];
};
