export type TestProps = {
  /** Функция возврата к превью теста. */
  toggleRender: VoidFunction;
};

export type AnswerType = {
  questionId: number;
  answerId: number[];
};

export type TestValidateType = {
  questionId: number;
  validateAnswers: Record<number, 'correct' | 'unanswered' | 'incorrect'>;
};
