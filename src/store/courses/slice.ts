import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { ProcessEnum } from 'utils/constants';
import { UserProgressStatus } from 'api/course';
import type { CoursesState } from './types';
import {
  enrollCourseById,
  fetchCourses,
  getCurrentLesson,
  unrollCourseById,
} from './thunk';

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
        ...state.enrollStatus[arg],
        process: ProcessEnum.Requested,
        error: null,
        userStatus: UserProgressStatus.NotEnrolled,
      };
    });
    builder.addCase(
      enrollCourseById.fulfilled,
      (state, { meta: { arg }, payload }) => {
        const { user_status: userStatus } = payload;
        state.enrollStatus[arg] = {
          ...state.enrollStatus[arg],
          process: ProcessEnum.Succeeded,
          error: null,
          userStatus,
        };
      }
    );
    builder.addCase(
      enrollCourseById.rejected,
      (state, { meta: { arg }, error }) => {
        state.enrollStatus[arg] = {
          ...state.enrollStatus[arg],
          process: ProcessEnum.Failed,
          error,
          userStatus: UserProgressStatus.NotEnrolled,
        };
      }
    );

    builder.addCase(unrollCourseById.fulfilled, (state, { meta: { arg } }) => {
      state.enrollStatus[arg] = {
        ...state.enrollStatus[arg],
        process: ProcessEnum.Succeeded,
        error: null,
        userStatus: UserProgressStatus.NotEnrolled,
      };
    });

    builder.addCase(getCurrentLesson.pending, (state, { meta: { arg } }) => {
      state.enrollStatus[arg] = {
        ...state.enrollStatus[arg],
        currentLesson: {
          process: ProcessEnum.Requested,
          error: null,
          lessonId: null,
          chapterId: null,
        },
      };
    });
    builder.addCase(
      getCurrentLesson.fulfilled,
      (state, { meta: { arg }, payload }) => {
        state.enrollStatus[arg] = {
          ...state.enrollStatus[arg],
          currentLesson: {
            process: ProcessEnum.Succeeded,
            error: null,
            lessonId: payload.lesson_id,
            chapterId: payload.chapter_id,
          },
        };
      }
    );
    builder.addCase(
      getCurrentLesson.rejected,
      (state, { meta: { arg }, error }) => {
        state.enrollStatus[arg] = {
          ...state.enrollStatus[arg],
          currentLesson: {
            process: ProcessEnum.Failed,
            error,
            lessonId: null,
            chapterId: null,
          },
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
      state.error = error;
    });
  },
});

export const { resetCoursesState, resetEnrollStatus } = coursesSlice.actions;

export default coursesSlice.reducer;
