import { TestModel, TestOnValidationData, TestResultModel } from 'api/lessons';

export type TestState = {
  isLoading: boolean;
  error: null | string;
  test: TestModel;
  answersOnValidate: TestOnValidationData[];
  testResult: TestResultModel | null;
};
