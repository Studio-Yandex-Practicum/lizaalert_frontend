import { createAsyncThunk } from '@reduxjs/toolkit';
import { courseApi } from 'api/course';

export const fetchCourseById = createAsyncThunk(
  'course/fetch',
  async (courseId: string) => {
    const course = await courseApi.getCourse(courseId);
    return course;
  }
);
