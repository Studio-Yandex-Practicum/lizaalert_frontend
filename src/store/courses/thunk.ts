import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { CoursesService } from 'services/courses/courses.service';

const fetchCoursesAction = createAsyncThunk(
  'courses/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const courses = await CoursesService.getCourses();
      return courses;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);

export default fetchCoursesAction;
