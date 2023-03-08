import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR } from 'utils/constants';
import type { CoursesState } from './types';
import { fetchCourses } from './thunk';

const initialState: CoursesState = {
  count: null,
  courses: null,
  isLoading: false,
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
      state.isLoading = true;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchCourses), (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchCourses), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export const { resetCoursesState } = coursesSlice.actions;

export default coursesSlice.reducer;
