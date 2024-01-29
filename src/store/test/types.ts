import { TestModel, TestOnValidationData } from 'api/lessons';
import { TestResultType } from 'components/organisms/test/types';

export type TestState = {
  isLoading: boolean;
  error: null | string;
  test: TestModel;
  answersOnValidate: TestOnValidationData[];
  testResult: TestResultType | null;
};
