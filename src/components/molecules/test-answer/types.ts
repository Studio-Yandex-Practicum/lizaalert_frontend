export type AnswerType = {
  id: number;
  text: string;
  isCorrect: boolean;
  isChecked: boolean;
};

export type AnswerOptionsType = 'checkbox' | 'radio';

export type TestAnswerProps = {
  answer: AnswerType;
  questionId: number;
  answerOptions: AnswerOptionsType;
};
