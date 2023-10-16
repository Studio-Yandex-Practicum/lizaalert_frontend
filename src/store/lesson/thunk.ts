import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessonsApi } from 'api/lessons';

export const fetchLessonById = createAsyncThunk(
  'lesson/fetch',
  async (id: number) => {
    const lesson = await lessonsApi.getLesson(id);
    return lesson;
  }
);
