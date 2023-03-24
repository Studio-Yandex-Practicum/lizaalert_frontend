import type { AppState } from '../types';

export const selectIsCoursesLoading = (state: AppState) =>
  state.courses.isLoading;
export const selectCoursesError = (state: AppState) => state.courses.error;
export const selectCourses = (state: AppState) => state.courses.courses;
export const selectCoursesTotal = (state: AppState) => state.courses.count;
