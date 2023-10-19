import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import type { CoursesState } from './types';
import { enrollCourseById, fetchCourses } from './thunk';

const initialState: CoursesState = {
  count: null,
  courses: [],
  process: ProcessEnum.Initial,
  error: null,
  enrollStatus: {},
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
    builder.addCase(enrollCourseById.pending, (state, { meta: { arg } }) => {
      state.enrollStatus[arg] = {
        process: ProcessEnum.Requested,
        error: null,
      };
    });
    builder.addCase(enrollCourseById.fulfilled, (state, { meta: { arg } }) => {
      state.enrollStatus[arg] = {
        process: ProcessEnum.Succeeded,
        error: null,
      };
    });
    builder.addCase(
      enrollCourseById.rejected,
      (state, { meta: { arg }, error }) => {
        state.enrollStatus[arg] = {
          process: ProcessEnum.Failed,
          error: error.message ?? GENERAL_ERROR,
        };
      }
    );
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
