import { AnswerStatus } from 'utils/constants';

export type TestProps = {
  /** Функция возврата к превью теста. */
  toggleRender: VoidFunction;
};

export type AnswerType = {
  questionId: number;
  answerId: number[];
};

export type ResultStatus =
  | AnswerStatus.CORRECT
  | AnswerStatus.UNANSWERED
  | AnswerStatus.INCORRECT;

export type ResultRecord = Record<number, ResultStatus>;

export type TestValidateType = {
  questionId: number;
  validateAnswers: ResultRecord;
};
