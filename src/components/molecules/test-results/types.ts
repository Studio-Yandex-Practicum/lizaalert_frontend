import type { TestAnswerType } from '../test-answer';

export type TestResultsProps = {
  /** Объект ответа, содержит id (number), text (string) */
  answer: TestAnswerType;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  validateAnswers: Record<number, 'correct' | 'unanswered' | 'incorrect'>;
};
