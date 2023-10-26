import type { TestQuestionType } from 'components/organisms/test-question';

export type TestQuestionListType = {
  /** id теста. */
  id: number;
  /** Массив опций выбора (ответов). */
  questions: TestQuestionType[];
};

export type TestAnswerListType = {
  /** id вопроса. */
  question_id: number;
  /** Массив id выбранных ответов. */
  answer_id: number[];
};

export type TestProps = {
  /** Функция возврата к превью теста. */
  toggleRender: VoidFunction;
};
