import { createSlice } from '@reduxjs/toolkit';
import fetchCoursesAction from './thunk';

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetAllState: () => {},
  },
  extraReducers: {
    [fetchCoursesAction.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCoursesAction.fulfilled.type]: (state, { payload }) => {
      state.courses = payload;
      state.isLoading = false;
    },
    [fetchCoursesAction.rejected.type]: (state, { payload }) => {
      state.courses = [];
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default coursesSlice.reducer;
