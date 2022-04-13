const selectCourse = (state) => state.course.course;
const selectCourseLoading = (state) => state.course.isLoading;
const selectCourseError = (state) => state.course.error;

export { selectCourse, selectCourseLoading, selectCourseError };
