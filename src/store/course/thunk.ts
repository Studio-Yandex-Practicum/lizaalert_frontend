import { createAsyncThunk } from '@reduxjs/toolkit';
import { courseApi } from 'api/course';

export const fetchCourse = createAsyncThunk(
  'course/fetch',
  async (courseId: number) => {
    const course = await courseApi.getCourse(courseId);
    return course;
  }
);
