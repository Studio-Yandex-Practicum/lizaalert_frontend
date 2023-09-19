import type { AppState } from '../types';

export const selectIsAuthLoading = (state: AppState) => state.auth.isLoading;
export const selectAuthError = (state: AppState) => state.auth.error;
export const selectIsAuth = (state: AppState) => state.auth.isAuth;
export const selectToken = (state: AppState) => state.auth.token;
