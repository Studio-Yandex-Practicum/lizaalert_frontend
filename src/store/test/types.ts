import { TestModel, TestOnValidationData, TestResultModel } from 'api/lessons';
import { ProcessEnum } from 'utils/constants';

export type TestState = {
  test: TestModel;
  answersOnValidate: TestOnValidationData[];
  testResult: TestResultModel | null;
  error: null | string;
  process: ProcessEnum;
  processValidationTest: ProcessEnum;
  processCreationTest: ProcessEnum;
};

export type UpdateAnswerAction = {
  type: string;
  payload: {
    questionId: number;
    answerId: number;
  };
};
