export type TestAnswerType = {
  id: number;
  text: string;
  isCorrect: boolean;
  isChecked: boolean;
};

export type TestAnswerOptionsType = 'checkbox' | 'radio';

export type TestAnswerProps = {
  answer: TestAnswerType;
  questionId: number;
  answerOptions: TestAnswerOptionsType;
};
