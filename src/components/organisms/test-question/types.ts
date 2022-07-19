import {
  TestAnswerOptionsType,
  TestAnswerType,
} from '../../molecules/test-answer';

export type TestQuestionType = {
  id: number;
  title: string;
  type: TestAnswerOptionsType;
  answers: TestAnswerType[];
};

export type TestQuestionProps = {
  question: TestQuestionType;
  index: number;
  type: TestAnswerOptionsType;
  isSubmitted?: boolean;
  className?: string;
};
