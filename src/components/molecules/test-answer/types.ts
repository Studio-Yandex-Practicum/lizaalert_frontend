import { Controls } from 'utils/constants';

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

export type TestAnswerOptionsType = Controls.RADIO | Controls.CHECKBOX;

export type TestAnswerProps = {
  /** Объект ответа, содержит id (number), text (string), isChecked (boolean), isCorrect (boolean). */
  answer: TestAnswerType;
  /** id вопроса, в котором содержится answer. */
  questionId: number;
  /** Тип чекбокса: мультивыбор или радио. */
  answerOptions: TestAnswerOptionsType;
};
