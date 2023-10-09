import { Controls } from 'utils/constants';

export type TestAnswerOptionsType =
  | Controls.RADIO
  | Controls.CHECKBOX
  | 'text_answer';

export type TestAnswerType = {
  /** id ответа. */
  id: number;
  /** Текст ответа. */
  text: string;
};

export type TestQuestionType = {
  /** id тестового вопроса. */
  id: number;
  /** Вопрос в виде строки. */
  title: string;
  /** Тип вопроса: мультивыбор или единственный. */
  question_type: TestAnswerOptionsType;
  /** Массив ответов тестового вопроса: id, text */
  content: TestAnswerType[];
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
  passing_score?: number;
  /** Количество попыток прохождения теста. */
  retries?: number;
  /** Дедлайн прохождения теста. */
  deadline: string;
  /** Флаг, проходится ли в данный момент этот тест. */
  in_progress?: boolean;
  /** Вопросы к тесту */
  questions?: TestQuestionType[];
};
