import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import fetchCoursesAction from './thunk';
import { ICourses, ICoursesReducer } from './types';

const initialState: ICoursesReducer = {
  count: null,
  next: null,
  previous: null,
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
      { payload }: PayloadAction<ICourses>
    ) => {
      state.results = payload.results;
      state.isLoading = false;
    },
    [fetchCoursesAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>
    ) => {
      state.results = [];
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default coursesSlice.reducer;
