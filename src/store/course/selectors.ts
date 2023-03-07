import type { AppState } from '../types';

const selectCourse = (state: AppState) => state.course;
const selectCourseTitle = (state: AppState) => state.course.course.title;
const selectCourseDescription = (state: AppState) =>
  state.course.course.full_description;
const selectCourseContent = (state: AppState) => state.course.course.chapters;

export {
  selectCourse,
  selectCourseTitle,
  selectCourseDescription,
  selectCourseContent,
};
