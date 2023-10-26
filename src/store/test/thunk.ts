import { createAsyncThunk } from '@reduxjs/toolkit';
import { type TestOnValidationData, lessonsApi } from 'api/lessons';

export const fetchTest = createAsyncThunk(
  'test/fetch',
  async (lessonId: number) => {
    const test = await lessonsApi.getTest(lessonId);
    return test;
  }
);

export const validateTest = createAsyncThunk(
  'test/validate',
  async (lessonId: number, answersData: TestOnValidationData[]) => {
    // console.log(answersData);
    const test = await lessonsApi.postTest(lessonId, answersData);
    return test;
  }
);
