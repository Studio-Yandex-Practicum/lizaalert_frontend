import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR } from '../../utils/constants';
import { fetchLessonById } from './thunk';

const lessonSlice = createSlice({
  name: 'lesson',
  initialState: {
    lesson: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLessonById.fulfilled, (state, { payload }) => {
      state.lesson = payload;
    });
    builder.addMatcher(isPending(fetchLessonById), (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchLessonById), (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchLessonById), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export default lessonSlice.reducer;
