import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchCourseAction from './thunk';
import { CourseReducerType } from './types';
import { CourseType } from '../../services/course/types';

const initialState: CourseReducerType = {
  course: {},
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
      { payload }: PayloadAction<CourseType>
    ) => {
      state.course = payload;
      state.isLoading = false;
    },
    [fetchCourseAction.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.course = {};
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default courseSlice.reducer;
