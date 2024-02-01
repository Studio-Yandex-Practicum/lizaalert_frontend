import { createAsyncThunk } from '@reduxjs/toolkit';
import { TestResultModel, lessonsApi } from 'api/lessons';
import type { AnswersValidationData } from 'api/lessons/types';

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
    await lessonsApi.createTest(id);
  }
);
