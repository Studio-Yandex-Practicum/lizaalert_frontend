import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { ProcessEnum } from 'utils/constants';
import { HomeworkModel, HomeworkStatus } from 'api/homework/types';
import { ErrorCodes, SerializedError } from 'api/core';
import type { HomeworkState } from './types';
import { fetchHomeworkByLessonId, updateHomework } from './thunk';

const initialState: HomeworkState = {
  homework: {
    status: HomeworkStatus.Draft,
    text: '',
  },
  process: ProcessEnum.Initial,
  error: null,
};

const homeworkSlice = createSlice({
  name: 'homework',
  initialState,
  reducers: {
    resetHomeworkState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilled(fetchHomeworkByLessonId, updateHomework),
        (state, { payload }) => {
          state.homework = payload as HomeworkModel;
          state.process = ProcessEnum.Succeeded;
          state.error = null;
        }
      )
      .addMatcher(
        isPending(fetchHomeworkByLessonId, updateHomework),
        (state) => {
          state.process = ProcessEnum.Requested;
          state.error = null;
        }
      )
      .addMatcher(
        isRejected(fetchHomeworkByLessonId, updateHomework),
        (state, { error }) => {
          if (error.code === ErrorCodes.NotFound) {
            state.homework = initialState.homework;
            state.process = ProcessEnum.Succeeded;
            state.error = null;
          } else {
            state.process = ProcessEnum.Failed;
            state.error = error as SerializedError;
          }
        }
      );
  },
});

export const { resetHomeworkState } = homeworkSlice.actions;

export default homeworkSlice.reducer;
