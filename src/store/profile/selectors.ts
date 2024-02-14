import type { AppState } from 'store/types';

export const selectFetchProfileProcess = (state: AppState) =>
  state.profile.fetchProfileProcess;
export const selectProfileError = (state: AppState) =>
  state.profile.fetchProfileError;
export const selectProfile = (state: AppState) => state.profile.profile;
export const selectProfileOverview = (state: AppState) =>
  state.profile.profile.accountOverview;
export const selectProfilePersonal = (state: AppState) =>
  state.profile.profile.personalData;
export const selectProfileAccount = (state: AppState) =>
  state.profile.profile.accountData;
