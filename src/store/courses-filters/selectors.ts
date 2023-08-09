import type { AppState } from '../types';

export const selectFilters = (state: AppState) => state.coursesFilters.filters;
export const selectFiltersProcess = (state: AppState) =>
  state.coursesFilters.process;
export const selectFiltersError = (state: AppState) =>
  state.coursesFilters.error;
