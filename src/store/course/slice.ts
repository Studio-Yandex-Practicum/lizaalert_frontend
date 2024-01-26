import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import { fetchCourseById } from './thunk';
import type { CourseState } from './types';

const initialState: CourseState = {
  course: {
    id: 0,
    title: '',
    level: '',
    full_description: '',
    faq: [],
    knowledge: [],
    start_date: '',
    cover_path: null,
    lessons_count: 0,
    course_duration: 0,
    chapters: [],
  },
  process: ProcessEnum.Initial,
  error: null,
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourseById.fulfilled, (state, { payload }) => {
      state.course = payload;
    });
    builder.addMatcher(isPending(fetchCourseById), (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchCourseById), (state) => {
      state.process = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchCourseById), (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export default courseSlice.reducer;
