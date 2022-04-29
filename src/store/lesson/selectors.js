const selectLesson = (state) => state.lesson.lesson;
const selectLessonLoading = (state) => state.lesson.isLoading;
const selectLessonError = (state) => state.lesson.error;

export { selectLesson, selectLessonLoading, selectLessonError };
