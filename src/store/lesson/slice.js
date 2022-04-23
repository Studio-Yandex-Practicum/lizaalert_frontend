import { createSlice } from '@reduxjs/toolkit';
import fetchLessonByIdAction from './thunk';

const lessonSlice = createSlice({
  name: 'lesson',
  initialState: {
    lesson: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchLessonByIdAction.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchLessonByIdAction.fulfilled]: (state, { payload }) => {
      state.lesson = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchLessonByIdAction.rejected]: (state, { payload }) => {
      state.lesson = {};
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default lessonSlice.reducer;
