import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import { UserProgressStatus } from 'api/course';
import type { CoursesState } from './types';
import { enrollCourseById, unrollCourseById, fetchCourses } from './thunk';

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
    resetEnrollStatus: (state) => ({
      ...state,
      enrollStatus: initialState.enrollStatus,
    }),
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
        userStatus: UserProgressStatus.NotEnrolled,
        currentLesson: null,
      };
    });
    builder.addCase(unrollCourseById.fulfilled, (state, { meta: { arg } }) => {
      state.enrollStatus[arg] = {
        process: ProcessEnum.Succeeded,
        error: null,
        currentLesson: null,
        userStatus: UserProgressStatus.NotEnrolled,
      };
    });
    builder.addCase(
      enrollCourseById.fulfilled,
      (state, { meta: { arg }, payload }) => {
        const { user_status: userStatus, ...currentLesson } = payload;
        state.enrollStatus[arg] = {
          process: ProcessEnum.Succeeded,
          error: null,
          userStatus,
          currentLesson,
        };
      }
    );
    builder.addCase(
      enrollCourseById.rejected,
      (state, { meta: { arg }, error }) => {
        state.enrollStatus[arg] = {
          process: ProcessEnum.Failed,
          error: error.message ?? GENERAL_ERROR,
          userStatus: UserProgressStatus.NotEnrolled,
          currentLesson: null,
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

export const { resetCoursesState, resetEnrollStatus } = coursesSlice.actions;

export default coursesSlice.reducer;
