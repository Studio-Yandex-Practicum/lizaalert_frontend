const selectTest = (state) => state.test.test;
const selectIsLoading = (state) => state.test.isLoading;
const selectError = (state) => state.test.error;

export { selectTest, selectIsLoading, selectError };
