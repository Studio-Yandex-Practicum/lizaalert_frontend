import { createAsyncThunk } from '@reduxjs/toolkit';
import mockCourses from '../../services/mock/courses.json';

const fetchCoursesAction = createAsyncThunk(
  'courses/fetch',
  async (_, { rejectWithValue }) => {
    try {
      // insert api call here
      return mockCourses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchCoursesAction;
