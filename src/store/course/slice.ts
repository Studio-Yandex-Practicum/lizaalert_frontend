import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CourseModel } from 'api/course';
import fetchCourseAction from './thunk';
import type { CourseState } from './types';

const initialState: CourseState = {
  course: {} as CourseModel,
  isLoading: false,
  error: null,
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCourseAction.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCourseAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<CourseModel>
    ) => {
      state.course = payload;
      state.isLoading = false;
    },
    [fetchCourseAction.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.course = {} as CourseModel;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default courseSlice.reducer;
