export type CoursePreviewType = {
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
  /** Продолжительность курса в часах. */
  course_duration: number | null;
  /** Статус курса. */
  course_status: 'active' | 'inactive' | 'finished' | 'booked';
  /** URL к обложке курса. */
  cover_path: string | null;
};

export type GetCoursesDataModel = {
  /** Порядковый номер загружаемой страницы. */
  page: number;
  /** Количество сущностей, которые нужно запросить. */
  pageSize: number;
};

export type CoursesType = {
  /** Общее количество курсов в базе данных. */
  count: number | null;
  /** Список курсов. */
  results: CoursePreviewType[];
};
