import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR } from '../../utils/constants';
import { checkAuth, fetchAuth, refreshToken } from './thunk';
import type { AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  isLoading: true,
  error: null,
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isPending(checkAuth, fetchAuth, refreshToken),
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      isFulfilled(checkAuth, fetchAuth, refreshToken),
      (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        if (payload) {
          state.isAuth = true;
          state.token = payload;
        }
      }
    );
    builder.addMatcher(
      isRejected(checkAuth, fetchAuth, refreshToken),
      (state, { error }) => {
        state.isAuth = false;
        state.isLoading = false;
        state.error = error.message ?? GENERAL_ERROR;
      }
    );
  },
});

export default authSlice.reducer;
