import { Nullable } from 'types';

export type LessonType = 'Quiz' | 'Videolesson' | 'Webinar' | 'Lesson';

export type LessonStatus = 'Ready' | 'Draft' | 'Published';

export type Lesson = {
  /** id урока курса. */
  id: number;
  /** Номер урока в последовательности. */
  order_number: number;
  /** Продолжительность урока. */
  duration: number;
  /** Заголовок-название урока. */
  title: string;
  /** Тип урока. */
  lesson_type: LessonType;
  /** Статус урока. */
  lesson_status: LessonStatus;
};

export type Chapter = {
  /** id главы курса. */
  id: number;
  /** Заголовок-название главы курса. */
  title: string;
  /** Список уроков главы курса. */
  lessons: Lesson[];
};

export type Course = {
  /** id курса. */
  id: number;
  /** Заголовок-название курса. */
  title: string;
  /** Уровень, на который рассчитан курс. */
  level: string;
  /** Короткое описание курса. */
  full_description: string;
  /** ??? */
  knowledge: null;
  /** Дата начала прохождения курса. */
  start_date: string;
  /** URL к обложке курса. */
  cover_path: Nullable<string>;
  /** Количество уроков в курсе. */
  lessons_count: number;
  /** Продолжительность курса в часах. */
  course_duration: Nullable<number>;
  /** Список глав курса. */
  chapters: Chapter[];
};
