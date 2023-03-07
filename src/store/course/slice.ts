import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import type { CourseModel } from 'api/course';
import { GENERAL_ERROR } from 'utils/constants';
import { fetchCourse } from './thunk';
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
  extraReducers: (builder) => {
    builder.addCase(fetchCourse.fulfilled, (state, { payload }) => {
      state.course = payload;
    });
    builder.addMatcher(isPending(fetchCourse), (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchCourse), (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchCourse), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export default courseSlice.reducer;
