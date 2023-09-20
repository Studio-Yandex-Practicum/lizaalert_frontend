import type { TestQuestionType } from 'components/organisms/test-question';

export type TestQuestionListType = {
  /** id теста. */
  id: number;
  /** Массив опций выбора (ответов). */
  questions: TestQuestionType[];
};

export type TestAnswersAfterParseType = {
  forEach(arg0: (answer: object) => void): unknown;
  /** id ответа. */
  id: number;
  /** Текст ответа. */
  text: string;
  /** Флаг правильности ответа. */
  isCorrect: boolean;
  /** Флаг, отмечен ли ответ пользователем. */
  isChecked: boolean;
};

export type TestProps = {
  /** Функция возврата к превью теста. */
  toggleRender: VoidFunction;
};
