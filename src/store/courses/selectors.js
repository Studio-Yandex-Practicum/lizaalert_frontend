const selectCourses = (state) => state.courses.courses;
const selectCoursesLoading = (state) => state.courses.loading;
const selectCoursesError = (state) => state.courses.error;

export { selectCourses, selectCoursesLoading, selectCoursesError };
