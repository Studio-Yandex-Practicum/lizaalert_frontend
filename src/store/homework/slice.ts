import { createSlice } from '@reduxjs/toolkit';
import { ProcessEnum } from 'utils/constants';
import { HomeworkModel, HomeworkStatus } from 'api/homework/types';
import { SerializedError } from 'api/core';
import type { HomeworkState } from './types';

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
        ({ type }) => /^homework.*?\/fulfilled/.test(type as string),
        (state, { payload }) => {
          state.homework = payload as HomeworkModel;
          state.process = ProcessEnum.Succeeded;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => /^homework.*?\/pending/.test(type as string),
        (state) => {
          state.process = ProcessEnum.Requested;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => /^homework.*?\/rejected/.test(type as string),
        (state, { error }) => {
          state.process = ProcessEnum.Failed;
          state.error = error as SerializedError;
        }
      );
  },
});

export const { resetHomeworkState } = homeworkSlice.actions;

export default homeworkSlice.reducer;
