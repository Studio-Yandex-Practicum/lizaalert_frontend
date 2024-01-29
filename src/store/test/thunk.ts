import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessonsApi, type TestOnValidationData } from 'api/lessons';
import { TestResultType } from 'components/organisms/test/types';

export const fetchTest = createAsyncThunk(
  'test/fetch',
  async (lessonId: string) => {
    const test = await lessonsApi.getTest(lessonId);
    return test;
  }
);

export const validateTest = createAsyncThunk<
  TestResultType,
  { id: string; answersData: TestOnValidationData[] }
>('test/validate', async ({ id, answersData }) => {
  const test = await lessonsApi.postAnswers({ id, answersData });
  return test;
});

export const createTest = createAsyncThunk(
  'test/create',
  async (id: string) => {
    const test = await lessonsApi.createTest(id);
    return test;
  }
);
