import { AnswerOptionsType, AnswerType } from '../../molecules/test-answer';

export type QuestionType = {
  id: number;
  title: string;
  answers: AnswerType[];
};

export type TestQuestionProps = {
  question: QuestionType;
  index: number;
  type: AnswerOptionsType;
  isSubmitted?: boolean;
  className?: string;
};
