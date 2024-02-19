import { createSlice } from '@reduxjs/toolkit';
import { ProcessEnum } from 'utils/constants';
import { LessonType } from 'api/lessons';
import { completeLesson, fetchLessonById } from './thunk';
import type { LessonState } from './types';

const initialNextLesson: LessonState['lesson']['next_lesson'] = {
  chapter_id: null,
  lesson_id: null,
};

const initialState: LessonState = {
  lesson: {
    course_id: 0,
    title: '',
    video_link: null,
    lesson_type: LessonType.Lesson,
    tags: '',
    duration: 0,
    next_lesson: initialNextLesson,
    prev_lesson: initialNextLesson,
  },
  process: ProcessEnum.Initial,
  completeLessonProcess: ProcessEnum.Initial,
  completeLessonError: null,
  error: null,
};

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    resetLessonState: () => initialState,
  },
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
      state.completeLessonError = error;
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
      state.error = error;
    });
  },
});

export const { resetLessonState } = lessonSlice.actions;

export default lessonSlice.reducer;
