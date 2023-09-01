import type { AppState } from '../types';

export const selectIsCourseLoading = (state: AppState) =>
  state.course.isLoading;
export const selectCourseError = (state: AppState) => state.course.error;
export const selectCourse = (state: AppState) => state.course.course;
export const selectCourseTitle = (state: AppState) => state.course.course.title;
export const selectCourseDescription = (state: AppState) =>
  state.course.course.full_description;
export const selectCourseBenefits = (state: AppState) =>
  state.course.course.knowledge;
export const selectCourseContents = (state: AppState) =>
  state.course.course.chapters;
