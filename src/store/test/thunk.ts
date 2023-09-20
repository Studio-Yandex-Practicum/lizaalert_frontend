import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessonsApi } from 'api/lessons';
import mockTest from 'api/mock/test.json';

export const fetchTest = createAsyncThunk(
  'test/fetch',
  async (lessonId: number) => {
    const response = await lessonsApi.getTest(lessonId);
    return response.questions ? response : mockTest;
  }
);
