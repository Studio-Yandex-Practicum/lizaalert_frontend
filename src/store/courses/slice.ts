import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoursesType } from 'services/courses/types';
import fetchCoursesAction from './thunk';
import { CoursesReducerType } from './types';

const initialState: CoursesReducerType = {
  count: null,
  results: [],
  isLoading: false,
  error: null,
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    resetAllState: () => {},
  },
  extraReducers: {
    [fetchCoursesAction.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCoursesAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<CoursesType>
    ) => {
      state.results = payload.results;
      state.count = payload.count;
      state.isLoading = false;
    },
    [fetchCoursesAction.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.results = [];
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default coursesSlice.reducer;
