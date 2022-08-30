import { AppState } from '../types';

const selectCourse = (state: AppState) => state.course.course;
const selectCourseTitle = (state: AppState) => state.course.course.title;
// const selectCourseDescription = (state: AppState) => state.course.course.description;
// const selectCourseContent = (state: AppState) => state.course.course.content;
// const selectCourseFaq = (state: AppState) => state.course.course.faq;
const selectCourseLoading = (state: AppState) => state.course.isLoading;
const selectCourseError = (state: AppState) => state.course.error;

export {
  selectCourse,
  selectCourseTitle,
  // selectCourseDescription,
  // selectCourseContent,
  // selectCourseFaq,
  selectCourseLoading,
  selectCourseError,
};
