const selectUser = (state) => state.user.user;
const selectIsSavedData = (state) => state.user.isSavedData;
const selectIsLoading = (state) => state.user.isLoading;
const selectError = (state) => state.user.error;

export { selectUser, selectIsSavedData, selectIsLoading, selectError };
