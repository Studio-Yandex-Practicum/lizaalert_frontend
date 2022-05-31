import { createSlice } from '@reduxjs/toolkit';
import fetchAuth from './thunk';

const initialState = {
  isAuth: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
  extraReducers: {
    [fetchAuth.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchAuth.fulfilled.type]: (state) => {
      state.isAuth = true;
      state.isLoading = false;
    },
    [fetchAuth.rejected.type]: (state, { payload }) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
