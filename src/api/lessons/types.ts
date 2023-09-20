import { Controls } from 'utils/constants';

export type TestAnswerOptionsType = Controls.RADIO | Controls.CHECKBOX;

export type TestAnswerType = {
  /** id ответа. */
  id: number;
  /** Текст ответа. */
  text: string;
  /** Флаг правильности ответа. */
  isCorrect: boolean;
  /** Флаг, отмечен ли ответ пользователем. */
  isChecked: boolean;
};

export type TestQuestionType = {
  /** id тестового вопроса. */
  id: number;
  /** Вопрос в виде строки. */
  title: string;
  /** Тип вопроса: мультивыбор или единственный. */
  type: TestAnswerOptionsType;
  /** Массив ответов тестового вопроса: id, text, isCorrect, isChecked. */
  answers: TestAnswerType[];
};

export type TestModel = {
  /** id теста. */
  id: number;
  /** Краткое описание теста. */
  description: string;
  /** Проходной балл в процентном выражении. */
  passingScore: number;
  /** Количество попыток прохождения теста. */
  retries: number;
  /** Дедлайн прохождения теста. */
  deadline: string;
  /** Флаг, проходится ли в данный момент этот тест. */
  inProgress: boolean;
  /** Вопросы к тесту */
  questions: TestQuestionType[];
};
