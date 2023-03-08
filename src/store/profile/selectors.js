const selectProfile = (state) => state.profile;
const selectProfileOverview = (state) => state.profile.profile.accountOverview;
const selectProfilePersonal = (state) => state.profile.profile.personalData;
const selectProfileAccount = (state) => state.profile.profile.accountData;

export {
  selectProfile,
  selectProfileOverview,
  selectProfilePersonal,
  selectProfileAccount,
};
