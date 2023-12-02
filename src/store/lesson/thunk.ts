import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessonsApi } from 'api/lessons';

export const fetchLessonById = createAsyncThunk(
  'lesson/fetch',
  async (id: string) => {
    const lesson = await lessonsApi.getLesson(id);
    return lesson;
  }
);

export const completeLesson = createAsyncThunk(
  'lesson/complete',
  async (id: string) => {
    await lessonsApi.completeLesson(id);
  }
);
