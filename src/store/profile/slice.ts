import {
  PayloadAction,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR } from '../../utils/constants';
import { fetchProfile } from './thunk';
import type { Profile, ProfileState } from './types';

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

const initialState: ProfileState = {
  profile: {
    accountOverview: {
      avatar: '',
      userName: '',
      userStatus: '',
      userOccupation: '',
      coursesFinished: 0,
    },
    personalData: {
      name: '',
      dateOfBirth: '',
      region: '',
      nickname: '',
      avatar: '',
    },
    accountData: {
      phoneNumber: '',
      email: '',
      password: '',
    },
  },
  isLoading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setPersonalData: (
      state,
      action: PayloadAction<Partial<Profile['personalData']>>
    ) => {
      state.profile.personalData = {
        ...state.profile.personalData,
        ...action.payload,
      };
    },
    setAccountData: (
      state,
      action: PayloadAction<Partial<Profile['accountData']>>
    ) => {
      state.profile.accountData = {
        ...state.profile.accountData,
        ...action.payload,
      };
    },
  },
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

export const { setPersonalData, setAccountData } = profileSlice.actions;

export default profileSlice.reducer;
