import { createSlice } from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import { completeLesson, fetchLessonById } from './thunk';
import type { LessonState } from './types';

const initialState: LessonState = {
  lesson: {
    course_id: 0,
    title: '',
    lesson_type: 'Lesson',
    tags: '',
    duration: 0,
    next_lesson: null,
    prev_lesson: null,
  },
  process: ProcessEnum.Initial,
  completeLessonProcess: ProcessEnum.Initial,
  completeLessonError: null,
  error: null,
};

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(completeLesson.pending, (state) => {
      state.completeLessonProcess = ProcessEnum.Requested;
      state.completeLessonError = null;
    });
    builder.addCase(completeLesson.fulfilled, (state) => {
      state.completeLessonProcess = ProcessEnum.Succeeded;
      state.completeLessonError = null;
    });
    builder.addCase(completeLesson.rejected, (state, { error }) => {
      state.completeLessonProcess = ProcessEnum.Failed;
      state.completeLessonError = error.message ?? GENERAL_ERROR;
    });
    builder.addCase(fetchLessonById.pending, (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addCase(fetchLessonById.fulfilled, (state, { payload }) => {
      state.lesson = payload;
      state.process = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addCase(fetchLessonById.rejected, (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export default lessonSlice.reducer;
