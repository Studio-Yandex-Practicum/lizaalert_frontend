import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { CoursesService } from '../../services/courses/courses.service';

const fetchCoursesAction = createAsyncThunk(
  'courses/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await CoursesService.getCourses();
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export default fetchCoursesAction;
