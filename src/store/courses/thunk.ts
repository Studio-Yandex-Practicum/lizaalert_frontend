import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import type { GetCoursesDataModel } from 'api/courses';
import { CoursesApi } from 'api/courses';

const fetchCoursesAction = createAsyncThunk(
  'courses/fetch',
  async (coursesData: GetCoursesDataModel, { rejectWithValue }) => {
    try {
      const courses = await CoursesApi.getCourses(coursesData);
      return courses;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);

export default fetchCoursesAction;
