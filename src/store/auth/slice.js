import { createSlice } from '@reduxjs/toolkit';
import checkAuth from './thunk';

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
    [checkAuth.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [checkAuth.fulfilled.type]: (state) => {
      state.isAuth = true;
      state.isLoading = false;
    },
    [checkAuth.rejected.type]: (state, { payload }) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
