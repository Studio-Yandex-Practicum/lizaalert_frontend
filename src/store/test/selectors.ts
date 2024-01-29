import { AppState } from '../types';

export const selectIsTestLoading = (state: AppState) => state.test.isLoading;
export const selectTestError = (state: AppState) => state.test.error;
export const selectTest = (state: AppState) => state.test.test;
export const selectAnswersOnValidate = (state: AppState) =>
  state.test.answersOnValidate;
export const selectTestResult = (state: AppState) => state.test.testResult;
