import { AppState } from '../types';

export const selectTestError = (state: AppState) => state.test.error;
export const selectTest = (state: AppState) => state.test.test;
export const selectAnswersOnValidate = (state: AppState) =>
  state.test.answersOnValidate;
export const selectTestResult = (state: AppState) => state.test.testResult;
export const selectTestResultPercent = (state: AppState) =>
  state.test.testResultPercent;
export const selectTestProcess = (state: AppState) => state.test.process;
export const selectProcessCreationTest = (state: AppState) =>
  state.test.processCreationTest;
export const selectProcessValidationTest = (state: AppState) =>
  state.test.processValidationTest;
