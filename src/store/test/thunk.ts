import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessonsApi, type TestOnValidationData } from 'api/lessons';

export const fetchTest = createAsyncThunk(
  'test/fetch',
  async (lessonId: number) => {
    const test = await lessonsApi.getTest(lessonId);
    return test;
  }
);

export const validateTest = createAsyncThunk(
  'test/validate',
  async ({
    id,
    answersData,
  }: {
    id: number;
    answersData: TestOnValidationData[];
  }) => {
    const test = await lessonsApi.postTest({ id, answersData });
    return test;
  }
);
