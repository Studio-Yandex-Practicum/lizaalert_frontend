import type { AppState } from '../types';

export const selectIsAuthLoading = (state: AppState) => state.auth.isLoading;
export const selectAuthError = (state: AppState) => state.auth.error;
export const selectIsAuth = (state: AppState) => state.auth.isAuth;
// У нас разве не должно быть статуса зарегистрированного пользователя?
// export const selectIsRegisterLoading = (state: AppState) =>
//   state.register.isLoading;
