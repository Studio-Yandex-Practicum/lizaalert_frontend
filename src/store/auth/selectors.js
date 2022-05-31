const selectIsAuth = (state) => state.auth.isAuth;
const selectIsLoading = (state) => state.auth.isLoading;
const selectError = (state) => state.auth.error;

export { selectIsAuth, selectIsLoading, selectError };
