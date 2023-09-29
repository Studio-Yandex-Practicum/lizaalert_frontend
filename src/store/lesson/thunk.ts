import { createAsyncThunk } from '@reduxjs/toolkit';
import { courseApi, GetCourseLessonData } from 'api/course';

export const fetchLessonById = createAsyncThunk(
  'lesson/fetch',
  async (data: GetCourseLessonData) => {
    const lesson = await courseApi.getCourseLesson(data);
    return lesson;
  }
);
