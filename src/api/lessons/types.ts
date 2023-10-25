import { Controls } from 'utils/constants';
import type { LessonType } from 'api/course';

export type TestAnswerOptionsType =
  | Controls.RADIO
  | Controls.CHECKBOX
  | 'text_answer';

export type TestAnswerModel = {
  /** id ответа. */
  id: number;
  /** Текст ответа. */
  text: string;
};

export type TestQuestionModel = {
  /** id тестового вопроса. */
  id: number;
  /** Вопрос в виде строки. */
  title: string;
  /** Тип вопроса: мультивыбор или единственный. */
  question_type: TestAnswerOptionsType;
  /** Массив ответов тестового вопроса: id, text */
  content: TestAnswerModel[];
};

export type TestModel = {
  /** id теста. */
  id?: number;
  /** Наименование теста. */
  title: string;
  /** Краткое описание теста. */
  description: string;
  /** Статус теста */
  status: string;
  /** Проходной балл в процентном выражении. */
  passing_score: Nullable<number>;
  /** Количество попыток прохождения теста. */
  retries: Nullable<number>;
  /** Дедлайн прохождения теста. */
  deadline: Nullable<string>;
  /** Флаг, проходится ли в данный момент этот тест. */
  in_progress?: boolean;
  /** Вопросы к тесту */
  questions?: TestQuestionModel[];
};

export type LessonModel = {
  /** id урока */
  id?: number;
  /** id курса */
  course_id: number;
  /** id главы */
  chapter_id?: number;
  /** Заголовок урока */
  title: string;
  /** Описание/контент урока */
  description?: string;
  /** Тип урока */
  lesson_type: LessonType;
  /** Теги урока */
  tags: string;
  /** Продолжительность урока */
  duration: number;
  /** Флаг, является ли урок дополнительным */
  additional?: boolean;
  /** Флаг, является ли урок дипломным */
  diploma?: boolean;
};
