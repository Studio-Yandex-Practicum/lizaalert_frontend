import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { ProcessEnum } from 'utils/constants';
import {
  checkAuth,
  fetchAuth,
  fetchRegistration,
  logout,
  loginByOauth,
} from './thunk';
import type { AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  process: ProcessEnum.Initial,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistration.fulfilled, (state) => {
      state.process = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addMatcher(
      isPending(checkAuth, fetchAuth, fetchRegistration, logout, loginByOauth),
      (state) => {
        state.process = ProcessEnum.Requested;
        state.error = null;
      }
    );
    builder.addMatcher(
      isFulfilled(checkAuth, fetchAuth, logout, loginByOauth),
      (state, { payload }) => {
        state.process = ProcessEnum.Succeeded;
        state.error = null;
        state.isAuth = payload;
      }
    );
    builder.addMatcher(
      isRejected(checkAuth, fetchAuth, fetchRegistration, logout, loginByOauth),
      (state, { error }) => {
        state.isAuth = false;
        state.process = ProcessEnum.Failed;
        state.error = error;
      }
    );
  },
});

export default authSlice.reducer;
