import { Nullable } from 'types';

export type CourseOverviewProps = {
  /**
   * id курса.
   * */
  id: number;
  /**
   * Уровень (квалификация) курса.
   * */
  level: string;
  /**
   * Дата начала занятий.
   * */
  startDate: string;
  /**
   * Путь к обложке курса.
   * */
  coverPath?: Nullable<string>;
  /**
   * Количество уроков в курсе.
   * */
  lessonsCount: number;
  /**
   * Продолжительность курса в часах.
   * */
  courseDuration?: Nullable<number>;
  /**
   * Обработчик клика по кнопке.
   * */
  onClick?: () => void;
};
