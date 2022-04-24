const selectProfile = (state) => state.profile;
const selectProfileOverview = (state) => state.profile.profile.accountOverview;
const selectProfilePersonal = (state) => state.profile.profile.personalData;
const selectProfileAccount = (state) => state.profile.profile.accountData;
const selectProfileLoading = (state) => state.profile.isLoading;
const selectProfileError = (state) => state.profile.error;

export {
  selectProfile,
  selectProfileOverview,
  selectProfilePersonal,
  selectProfileAccount,
  selectProfileLoading,
  selectProfileError,
};
