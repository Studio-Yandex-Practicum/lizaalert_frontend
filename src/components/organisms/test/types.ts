import type { TestResultRecord } from 'components/molecules/test-results';
import type { TestQuestionModel } from 'api/lessons';
import type { TestValidatedMapType } from 'utils/validate-answers';

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

export type RenderQuestionsListArgs = {
  questions: TestQuestionModel[];
  testResult: TestValidatedMapType;
  isSubmitted: boolean;
};
