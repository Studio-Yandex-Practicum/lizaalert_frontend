import type { AppState } from '../types';

export const selectLessonProcess = (state: AppState) => state.lesson.process;
export const selectLessonError = (state: AppState) => state.lesson.error;
export const selectLesson = (state: AppState) => state.lesson.lesson;
export const selectCompleteLessonProcess = (state: AppState) =>
  state.lesson.completeLessonProcess;
export const selectCompleteLessonError = (state: AppState) =>
  state.lesson.completeLessonError;
