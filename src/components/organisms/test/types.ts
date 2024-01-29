import { TestQuestionType } from '../test-question/types';

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

export type TestResultListType = {
  question_id: number;
  correct_answer_id: number[];
  is_correct: boolean;
};

export type TestResultType = {
  id: number;
  remaining_retries: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  answers: TestAnswerListType[];
  result: TestResultListType[];
  retry_count: number;
  score: number;
  final_result: string;
  start_date: string;
  end_date: string;
  user: number;
  quiz: number;
};
