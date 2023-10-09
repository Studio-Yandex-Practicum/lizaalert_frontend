import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessonsApi } from 'api/lessons';

export const fetchTest = createAsyncThunk(
  'test/fetch',
  async (lessonId: number) => {
    const test = await lessonsApi.getTest(lessonId);
    return test;
  }
);
