import { createAsyncThunk } from '@reduxjs/toolkit';
import { homeworkApi } from 'api/homework';
import { HomeworkAnswerData } from 'api/homework/types';

export const fetchHomeworkByLessonId = createAsyncThunk(
  'homework/fetch',
  async (id: string) => {
    const homework = await homeworkApi.getHomework(id);
    return homework;
  }
);

export const updateHomework = createAsyncThunk(
  'homework/update',
  async (data: HomeworkAnswerData) => {
    const homework = await homeworkApi.updateHomework(data);
    return homework;
  }
);
