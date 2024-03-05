import type { TestQuestionModel } from 'api/lessons';
import type { TestAnswerOptionsType } from 'components/molecules/test-answer';
import type { TestResultRecord } from 'components/molecules/test-results';

export type TestQuestionProps = {
  /** Объект вопроса, содержит id, title, question_type и content (массив ответов). */
  question: TestQuestionModel;
  /** index объекта в массиве вопросов. Нужен для нумерации в интерфейсе. */
  index: number;
  /** Тип вопроса: мультивыбор или единственный. */
  type: TestAnswerOptionsType;
  /** Флаг отправки ответа. */
  isSubmitted?: boolean;
  /** Мапа провалидированных ответов теста */
  validatedAnswers: TestResultRecord;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
