import { ProcessEnum } from 'utils/constants';
import type { AppState } from '../types';

export const selectIsCourseLoading = (state: AppState) =>
  state.course.process === ProcessEnum.Requested;
export const selectCourseProcess = (state: AppState) => state.course.process;
export const selectCourseError = (state: AppState) => state.course.error;
export const selectCourse = (state: AppState) => state.course.course;
export const selectCourseTitle = (state: AppState) => state.course.course.title;
export const selectCourseDescription = (state: AppState) =>
  state.course.course.full_description;
export const selectCourseFAQ = (state: AppState) => state.course.course.faq;
export const selectCourseBenefits = (state: AppState) =>
  state.course.course.knowledge;
export const selectCourseContents = (state: AppState) =>
  state.course.course.chapters;
