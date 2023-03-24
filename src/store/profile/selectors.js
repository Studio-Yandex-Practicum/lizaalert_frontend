export const selectIsProfileLoading = (state) => state.profile.isLoading;
export const selectProfileError = (state) => state.profile.error;
export const selectProfile = (state) => state.profile.profile;
export const selectProfileOverview = (state) =>
  state.profile.profile.accountOverview;
export const selectProfilePersonal = (state) =>
  state.profile.profile.personalData;
export const selectProfileAccount = (state) =>
  state.profile.profile.accountData;
