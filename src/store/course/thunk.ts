import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import { CourseApi } from 'api/course';

const fetchCourseAction = createAsyncThunk(
  'course/fetch',
  async (courseId: number, { rejectWithValue }) => {
    try {
      const course = await CourseApi.getCourse(courseId);
      return course;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);

export default fetchCourseAction;
