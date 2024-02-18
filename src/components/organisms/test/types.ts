import type { TestResultRecord } from 'components/molecules/test-results';

export type TestProps = {
  /** Функция возврата к превью теста. */
  onShowPreview: VoidFunction;
};

export type TestAnswerType = {
  questionId: number;
  answerId: number[];
};

export type TestValidatedType = {
  questionId: number;
  validatedAnswers: TestResultRecord;
};
