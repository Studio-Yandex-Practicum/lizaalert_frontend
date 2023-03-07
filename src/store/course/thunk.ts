import { createAsyncThunk } from '@reduxjs/toolkit';
import { CourseApi } from 'api/course';

export const fetchCourse = createAsyncThunk(
  'course/fetch',
  async (courseId: number) => {
    const course = await CourseApi.getCourse(courseId);
    return course;
  }
);
