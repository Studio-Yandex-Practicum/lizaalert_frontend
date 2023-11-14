import { UserProgressStatus } from 'api/course';
import type { CurrentLessonModel } from 'api/course/types';
import type { EnrollStatusType } from 'store/courses/types';

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
  /** Статус подписки на курс c бэка. */
  userStatus?: UserProgressStatus;
  /** Продолжительность курса в часах. */
  courseDuration?: Nullable<number>;
  /** Обработчик клика по кнопке. */
  onClick?: VoidFunction;
  /** Объект статуса подписки на курс */
  enrollStatus?: EnrollStatusType;
  /** Id текущего (последнего не пройденного) урока */
  currentLesson: CurrentLessonModel;
};
