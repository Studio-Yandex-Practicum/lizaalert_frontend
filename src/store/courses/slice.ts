import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import type { CoursesState } from './types';
import { fetchCourses } from './thunk';

const initialState: CoursesState = {
  count: null,
  courses: null,
  process: ProcessEnum.Initial,
  error: null,
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    resetCoursesState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, { payload }) => {
      if (!state.courses) {
        state.courses = payload.results;
      }

      if (state.courses.length < Number(payload.count)) {
        state.courses = [...state.courses, ...payload.results];
      }

      state.count = payload.count;
    });
    builder.addMatcher(isPending(fetchCourses), (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchCourses), (state) => {
      state.process = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchCourses), (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export const { resetCoursesState } = coursesSlice.actions;

export default coursesSlice.reducer;
