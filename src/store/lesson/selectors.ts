import type { AppState } from '../types';

export const selectLessonProcess = (state: AppState) => state.lesson.process;
export const selectLessonError = (state: AppState) => state.lesson.error;
export const selectLesson = (state: AppState) => state.lesson.lesson;
export const selectLessonType = (state: AppState) =>
  state.lesson.lesson.lesson_type;
