import { Controls } from 'utils/constants';

export enum LessonType {
  Quiz = 'Quiz',
  Videolesson = 'Videolesson',
  Webinar = 'Webinar',
  Lesson = 'Lesson',
}

export enum UserLessonProgress {
  NotStarted,
  InProgress,
  Finished,
}

export type TestAnswerOptionsType =
  | Controls.RADIO
  | Controls.CHECKBOX
  | 'text_answer';

export type TestOnValidationData = {
  /** id вопроса. */
  question_id: number;
  /** id ответа. */
  answer_id: number[];
};

export type AnswersValidationData = {
  /** id урока. */
  id: string;
  /** объект с выбранными ответами на тест. */
  answers: TestOnValidationData[];
};

export type TestAnswerModel = {
  /** id ответа. */
  id: number;
  /** Текст ответа. */
  text: string;
  /** Флаг ответа. */
  selected?: boolean;
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
  id: number;
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

export type TestResultListModel = {
  /** id вопроса. */
  question_id: number;
  /** Массив правильных ответов. */
  correct_answer_id: number[];
  /** Флаг ответа. */
  is_correct: boolean;
};

export type TestAnswerListModel = {
  /** id вопроса. */
  question_id: number;
  /** Массив id выбранных ответов. */
  answer_id: number[];
};

export type TestResultModel = {
  /** id результата. */
  id: number;
  /** Оставшиеся попытки. */
  remaining_retries: string;
  /** Дата создания. */
  created_at: string;
  /** Дата обновления. */
  updated_at: string;
  /** Дата удаления. */
  deleted_at: string;
  /** Массив ответов пользователя. */
  answers: TestAnswerListModel[];
  /** Результат проверки ответов. */
  result: TestResultListModel[];
  /** Количество попыток. */
  retry_count: number;
  /** Счет правильных ответов. */
  score: number;
  /** Конечный результат. */
  final_result: string;
  /** Дата начала. */
  start_date: string;
  /** Дата окончания. */
  end_date: string;
  /** id пользователя. */
  user: number;
  /** id квиза. */
  quiz: number;
};

export type LessonBreadcrumbsModel = {
  course: {
    id: number;
    title: string;
  };
  chapter: {
    id: number;
    title: string;
  };
};

export type NextLessonModel = {
  chapter_id: Nullable<number>;
  lesson_id: Nullable<number>;
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
  /** URL ссылки на видео-урок с внешнего видео-хостинга. */
  video_link: string | null;
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
  /** Объект хлебных крошек */
  breadcrumbs?: LessonBreadcrumbsModel;
  /** Статус прохождения урока */
  user_lesson_progress?: UserLessonProgress;
  /** Объект с информацией о след. уроке */
  next_lesson: NextLessonModel;
  /** Объект с информацией о пред. уроке */
  prev_lesson: NextLessonModel;
};
