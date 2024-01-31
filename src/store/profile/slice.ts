import { createSlice } from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from '../../utils/constants';
import { editProfile, fetchProfile } from './thunk';
import type { ProfileState } from './types';

const initialState: ProfileState = {
  profile: {
    id: '',
    personalData: {
      full_name: '',
      birth_date: '',
      location: '',
    },
    accountOverview: {
      full_name: '',
      count_pass_course: 0,
      department: '',
      call_sign: '',
      photo: '',
    },
    accountData: {
      phone_number: '',
      email: '',
    },
  },
  fetchProfileProcess: ProcessEnum.Initial,
  fetchProfileError: null,
  editProfileProcess: ProcessEnum.Initial,
  editProfileError: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.fetchProfileProcess = ProcessEnum.Requested;
      state.fetchProfileError = null;
    });
    builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
      state.fetchProfileProcess = ProcessEnum.Succeeded;
      state.profile = payload;
    });
    builder.addCase(fetchProfile.rejected, (state, { error }) => {
      state.fetchProfileProcess = ProcessEnum.Failed;
      state.fetchProfileError = error.message ?? GENERAL_ERROR;
    });
    builder.addCase(editProfile.pending, (state) => {
      state.editProfileProcess = ProcessEnum.Requested;
      state.editProfileError = null;
    });
    builder.addCase(editProfile.fulfilled, (state, { payload }) => {
      state.editProfileProcess = ProcessEnum.Succeeded;
      state.profile = payload;
    });
    builder.addCase(editProfile.rejected, (state, { error }) => {
      state.editProfileProcess = ProcessEnum.Failed;
      state.editProfileError = error.message ?? GENERAL_ERROR;
    });
  },
});

export default profileSlice.reducer;
