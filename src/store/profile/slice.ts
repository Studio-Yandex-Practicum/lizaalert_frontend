// import {
//   PayloadAction,
//   createSlice,
//   isFulfilled,
//   isPending,
//   isRejected,
// } from '@reduxjs/toolkit';
// import { GENERAL_ERROR } from '../../utils/constants';
// import { fetchProfile } from './thunk';
// import type { Profile, ProfileState } from './types';

// export const profileSlice = createSlice({
//   name: 'profile',
//   initialState: {
//     profile: {},
//     isLoading: true,
//     error: null,
//   },
//   reducers: {
//     setPersonalData: (state, action) => {
//       state.profile.personalData = action.payload;
//     },
//     setAccountData: (state, action) => {
//       state.profile.accountData = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
//       state.profile = payload;
//     });
//     builder.addMatcher(isPending(fetchProfile), (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addMatcher(isFulfilled(fetchProfile), (state) => {
//       state.isLoading = false;
//       state.error = null;
//     });
//     builder.addMatcher(isRejected(fetchProfile), (state, { error }) => {
//       state.isLoading = false;
//       state.error = error.message ?? GENERAL_ERROR;
//     });
//   },
// });

// export const { setPersonalData, setAccountData } = profileSlice.actions;

// export default profileSlice.reducer;

import {
  // PayloadAction,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR } from '../../utils/constants';
import { fetchProfile } from './thunk';
import type { ProfileState } from './types';

const initialState: ProfileState = {
  profile: {
    photo: '',
    full_name: '',
    department: '',
    count_pass_course: '',
    birth_date: '',
    location: '',
    call_sign: '',
    phone_number: '',
    email: '',
  },
  isLoading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(isPending(fetchProfile), (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchProfile), (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchProfile), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

// export const { setPersonalData, setAccountData } = profileSlice.actions;

export default profileSlice.reducer;
