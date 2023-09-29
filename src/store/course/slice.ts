import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import type { CourseModel } from 'api/course';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import { fetchCourse } from './thunk';
import type { CourseState } from './types';

const initialState: CourseState = {
  course: {} as CourseModel,
  process: ProcessEnum.Initial,
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
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchCourse), (state) => {
      state.process = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchCourse), (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export default courseSlice.reducer;
