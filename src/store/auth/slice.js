import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR } from '../../utils/constants';
import { checkAuth, fetchAuth } from './thunk';

const initialState = {
  isAuth: false,
  isLoading: true,
  error: null,
  // ввдение токена
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.token = payload.token;
      console.log('state.token', state.token);
    });
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.isAuth = payload;
    });
    builder.addMatcher(isPending(checkAuth, fetchAuth), (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(checkAuth, fetchAuth), (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(isRejected(checkAuth, fetchAuth), (state, { error }) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
