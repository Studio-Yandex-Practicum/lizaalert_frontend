import { createSlice } from '@reduxjs/toolkit';
import fetchCourseAction from './thunk';

export const courseSlice = createSlice({
  name: 'course',
  initialState: {
    course: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCourseAction.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCourseAction.fulfilled.type]: (state, { payload }) => {
      state.course = payload;
      state.isLoading = false;
    },
    [fetchCourseAction.rejected.type]: (state, { payload }) => {
      state.course = {};
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default courseSlice.reducer;
