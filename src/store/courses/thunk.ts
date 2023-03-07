import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GetCoursesDataModel } from 'api/courses';
import { CoursesApi } from 'api/courses';

export const fetchCourses = createAsyncThunk(
  'courses/fetch',
  async (coursesData: GetCoursesDataModel) => {
    const courses = await CoursesApi.getCourses(coursesData);
    return courses;
  }
);
