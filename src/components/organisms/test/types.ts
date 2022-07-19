import { TestQuestionType } from '../test-question';

export type TestQuestionListType = {
  id: number;
  questions: TestQuestionType[];
};

export type TestProps = {
  toggleRender: (...args: unknown[]) => void;
};
