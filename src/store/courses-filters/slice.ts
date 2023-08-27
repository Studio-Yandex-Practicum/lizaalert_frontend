import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import type { CoursesFiltersState } from './types';
import { fetchFilters } from './thunk';

const initialState: CoursesFiltersState = {
  filters: [],
  process: ProcessEnum.Initial,
  error: null,
};

export const coursesFiltersSlice = createSlice({
  name: 'courses-filters',
  initialState,
  reducers: {
    resetFiltersState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(fetchFilters), (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchFilters), (state, { payload }) => {
      state.process = ProcessEnum.Succeeded;
      state.filters = payload;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchFilters), (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export const { resetFiltersState } = coursesFiltersSlice.actions;

export default coursesFiltersSlice.reducer;
