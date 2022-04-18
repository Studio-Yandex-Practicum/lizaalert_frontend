import { createSlice } from '@reduxjs/toolkit';
import fetchProfileAction from './thunk';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setPersonalData(state, action) {
      state.profile.personalData = action.payload;
    },
    setAccountData(state, action) {
      state.profile.accountData = action.payload;
    },
    setAccountOverview(state, action) {
      state.profile.accountOverview = action.payload;
    },
  },
  extraReducers: {
    [fetchProfileAction.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchProfileAction.fulfilled.type]: (state, { payload }) => {
      state.profile = payload;
      state.isLoading = false;
    },
    [fetchProfileAction.rejected.type]: (state, { payload }) => {
      state.profile = {};
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default profileSlice.reducer;
