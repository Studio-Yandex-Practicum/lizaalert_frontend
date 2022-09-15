import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from 'services/course/types';
import fetchCourseAction from './thunk';
import { CourseReducerType } from './types';

const initialState: CourseReducerType = {
  course: {} as Course,
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
      { payload }: PayloadAction<Course>
    ) => {
      state.course = payload;
      state.isLoading = false;
    },
    [fetchCourseAction.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.course = {} as Course;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default courseSlice.reducer;
