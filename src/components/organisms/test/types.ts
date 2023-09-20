import type { TestQuestionType } from 'components/organisms/test-question';

export type TestQuestionListType = {
  /** id теста. */
  id: number;
  /** Массив опций выбора (ответов). */
  questions: TestQuestionType[];
};

export type TestProps = {
  /** Функция возврата к превью теста. */
  toggleRender: VoidFunction;
};
