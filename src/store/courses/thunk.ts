import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GetCoursesData } from 'api/courses';
import { coursesApi } from 'api/courses';

export const fetchCourses = createAsyncThunk(
  'courses/fetch',
  async (coursesData: GetCoursesData) => {
    const courses = await coursesApi.getCourses(coursesData);
    return courses;
  }
);
