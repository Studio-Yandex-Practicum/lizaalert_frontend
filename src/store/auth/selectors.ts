import { LOADING_PROCESS_MAP } from 'utils/constants';
import type { AppState } from '../types';

export const selectIsAuthLoading = (state: AppState) =>
  LOADING_PROCESS_MAP[state.auth.process];
export const selectAuthProcess = (state: AppState) => state.auth.process;
export const selectAuthError = (state: AppState) => state.auth.error;
export const selectIsAuth = (state: AppState) => state.auth.isAuth;
