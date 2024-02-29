import { createSlice } from '@reduxjs/toolkit';
import { ProcessEnum } from 'utils/constants';
import { fetchWebinarById } from './thunk';
import type { WebinarState } from './types';

const initialState: WebinarState = {
  webinar: {
    lesson: '',
    cohort: 0,
    webinar_date: '',
  },
  process: ProcessEnum.Initial,
  error: null,
};

const webinarSlice = createSlice({
  name: 'webinar',
  initialState,
  reducers: {
    resetWebinarState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWebinarById.pending, (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addCase(fetchWebinarById.fulfilled, (state, { payload }) => {
      state.webinar = payload;
      state.process = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addCase(fetchWebinarById.rejected, (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error;
    });
  },
});

export const { resetWebinarState } = webinarSlice.actions;

export default webinarSlice.reducer;
