import { createAsyncThunk } from '@reduxjs/toolkit';
import { homeworkApi } from 'api/homework';
import { HomeworkAnswerData } from 'api/homework/types';

export const fetchHomeworkByLessonId = createAsyncThunk(
  'homework/fetch',
  async (id: number) => {
    const homework = await homeworkApi.getHomework(id);
    // console.log('homework thunk', homework);
    return homework;
  }
);

export const updateHomework = createAsyncThunk(
  'homework/update',
  async (data: HomeworkAnswerData) => {
    await homeworkApi.updateHomework(data);
  }
);
