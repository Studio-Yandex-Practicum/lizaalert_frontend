import type { AppState } from '../types';

export const selectHomework = (state: AppState) => state.homework;
/* export const selectHomeworkProcess = (state: AppState) =>
  state.homework.process;
export const selectHomeworkError = (state: AppState) => state.homework.error;
*/
