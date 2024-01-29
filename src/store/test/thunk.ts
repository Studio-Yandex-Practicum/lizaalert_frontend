import { createAsyncThunk } from '@reduxjs/toolkit';
import { TestResultModel, lessonsApi } from 'api/lessons';
import { AnswersValidationData } from 'api/lessons/types';

export const fetchTest = createAsyncThunk(
  'test/fetch',
  async (lessonId: string) => {
    const test = await lessonsApi.getTest(lessonId);
    return test;
  }
);

export const validateTest = createAsyncThunk<
  TestResultModel,
  AnswersValidationData
>('test/validate', async (data) => {
  const test = await lessonsApi.postAnswers(data);
  return test;
});

export const createTest = createAsyncThunk(
  'test/create',
  async (id: string) => {
    const test = await lessonsApi.createTest(id);
    return test;
  }
);
