import type { AppState } from '../types';
import { Profile } from './types';

export const selectIsProfileLoading = (state: AppState) =>
  state.profile.isLoading;
export const selectProfileError = (state: AppState) => state.profile.error;
export const selectProfile = (state: AppState): Profile =>
  state.profile.profile;
export const selectProfileEmail = (state: AppState) =>
  state.profile.profile.email;
export const selectProfilePhone = (state: AppState) =>
  state.profile.profile.phone_number;
export const selectProfileName = (state: AppState) =>
  state.profile.profile.full_name;
export const selectIsProfileDateOfBirth = (state: AppState) =>
  state.profile.profile.birth_date;
export const selectIsProfileLocation = (state: AppState) =>
  state.profile.profile.location;
export const selectIsProfilePhoto = (state: AppState) =>
  state.profile.profile.photo;
export const selectIsProfileDepartment = (state: AppState) =>
  state.profile.profile.department;
export const selectIsProfileCountPassCourse = (state: AppState) =>
  state.profile.profile.count_pass_course;
export const selectIsProfileCallSign = (state: AppState) =>
  state.profile.profile.call_sign;
