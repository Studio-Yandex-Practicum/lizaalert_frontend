import { TestAnswerIcons, TestAnswerStatus } from 'utils/constants';
import type { TestAnswerType } from '../test-answer';

export type TestResultStatus =
  | TestAnswerStatus.Correct
  | TestAnswerStatus.Unanswered
  | TestAnswerStatus.Incorrect;

export type TestResultRecord = Record<number, TestResultStatus>;

export type TestResultsProps = {
  /** Объект ответа, содержит id (number), text (string) */
  answer: TestAnswerType;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Мапа провалидированных ответов теста */
  validatedAnswers: TestResultRecord;
};

export type ResultType = {
  resultClassName?: string;
  resultIcon: TestAnswerIcons;
};
