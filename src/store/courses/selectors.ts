import type { AppState } from '../types';

const selectCourses = (state: AppState) => state.courses.results;
const selectCoursesTotal = (state: AppState) => state.courses.count;
const selectCoursesLoading = (state: AppState) => state.courses.isLoading;
const selectCoursesError = (state: AppState) => state.courses.error;

export {
  selectCourses,
  selectCoursesTotal,
  selectCoursesLoading,
  selectCoursesError,
};
