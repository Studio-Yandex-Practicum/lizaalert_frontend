import { createAsyncThunk } from '@reduxjs/toolkit';
import { coursesFiltersApi } from 'api/courses-filters';

export const fetchFilters = createAsyncThunk(
  'courses-filters/fetch',
  async () => {
    const filters = await coursesFiltersApi.getFilters();
    return filters;
  }
);
