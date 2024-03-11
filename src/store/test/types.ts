import { SerializedError } from 'api/core';
import { ProcessEnum } from 'utils/constants';
import type { TestModel, TestOnValidationData } from 'api/lessons';
import type { TestValidatedMapType } from 'utils/validate-answers';

export type TestState = {
  test: TestModel;
  answersOnValidate: TestOnValidationData[];
  testResult: TestValidatedMapType;
  testResultPercent: Nullable<number>;
  error: Nullable<SerializedError>;
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
