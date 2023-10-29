import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR } from 'utils/constants';
import { checkAuth, fetchAuth, fetchRegistration, logout } from './thunk';
import type { AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  isLoading: true,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistration.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(
      isPending(checkAuth, fetchAuth, fetchRegistration, logout),
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      isFulfilled(checkAuth, fetchAuth, logout),
      (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isAuth = payload;
      }
    );
    builder.addMatcher(
      isRejected(checkAuth, fetchAuth, fetchRegistration, logout),
      (state, { error }) => {
        state.isAuth = false;
        state.isLoading = false;
        state.error = error.message ?? GENERAL_ERROR;
      }
    );
  },
});

export default authSlice.reducer;
