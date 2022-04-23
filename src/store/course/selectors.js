const selectCourse = (state) => state.course.course;
const selectCourseTitle = (state) => state.course.course.title;
const selectCourseDescription = (state) => state.course.course.description;
const selectCourseContent = (state) => state.course.course.content;
const selectCourseFaq = (state) => state.course.course.faq;
const selectCourseLoading = (state) => state.course.isLoading;
const selectCourseError = (state) => state.course.error;

export {
  selectCourse,
  selectCourseTitle,
  selectCourseDescription,
  selectCourseContent,
  selectCourseFaq,
  selectCourseLoading,
  selectCourseError,
};
