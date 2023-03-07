import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GetCoursesDataModel } from 'api/courses';
import { coursesApi } from 'api/courses';

export const fetchCourses = createAsyncThunk(
  'courses/fetch',
  async (coursesData: GetCoursesDataModel) => {
    const courses = await coursesApi.getCourses(coursesData);
    return courses;
  }
);
