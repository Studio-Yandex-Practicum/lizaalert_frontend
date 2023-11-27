import { UserProgressStatus } from 'api/course';
import type { CurrentLessonModel } from 'api/course/types';

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
  /** Продолжительность курса в часах. */
  course_duration: number;
  /** Статус курса. */
  course_status: 'active' | 'inactive' | 'finished' | 'booked';
  /** URL к обложке курса. */
  cover_path: string | null;
  /** Статус подписки пользователя на курс. */
  user_status?: UserProgressStatus;
  /** Id текущего (последнего не пройденного) урока */
  current_lesson: CurrentLessonModel;
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
  count: number | null;
  /** Список курсов. */
  results: CoursePreviewModel[];
};
