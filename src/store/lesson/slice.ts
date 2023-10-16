import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import { fetchLessonById } from './thunk';
import type { LessonState } from './types';

const initialState: LessonState = {
  lesson: {
    course_id: 0,
    title: '',
    lesson_type: 'Lesson',
    tags: '',
    duration: 0,
  },
  process: ProcessEnum.Initial,
  error: null,
};

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLessonById.fulfilled, (state, { payload }) => {
      state.lesson = payload;
    });
    builder.addMatcher(isPending(fetchLessonById), (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchLessonById), (state) => {
      state.process = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchLessonById), (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export default lessonSlice.reducer;
