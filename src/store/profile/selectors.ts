import type { AppState } from '../types';
import { Profile } from './types';

export const selectIsProfileLoading = (state: AppState) =>
  state.profile.isLoading;
export const selectProfileError = (state: AppState) => state.profile.error;
export const selectProfile = (state: AppState): Profile =>
  state.profile.profile;
export const selectProfileOverview = (state: AppState) =>
  state.profile.profile.accountOverview;
export const selectProfilePersonal = (state: AppState) =>
  state.profile.profile.personalData;
export const selectProfileAccount = (state: AppState) =>
  state.profile.profile.accountData;
