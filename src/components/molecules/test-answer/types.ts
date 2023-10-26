import { Controls } from 'utils/constants';

export type TestAnswerType = {
  /** id ответа. */
  id: number;
  /** Текст ответа. */
  text: string;
  /** Статус, выбран ли ответ */
  isChecked?: boolean;
};

export type TestAnswerOptionsType =
  | Controls.RADIO
  | Controls.CHECKBOX
  | 'text_answer';

export type TestAnswerProps = {
  /** Объект ответа, содержит id (number), text (string)  */
  content: TestAnswerType;
  /** id вопроса, в котором содержится answer. */
  questionId: number;
  /** Тип чекбокса: мультивыбор или радио. */
  answerOptions: TestAnswerOptionsType;
};
