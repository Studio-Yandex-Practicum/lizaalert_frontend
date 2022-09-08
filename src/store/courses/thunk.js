import { createAsyncThunk } from '@reduxjs/toolkit';
import { SPINNER_DELAY } from '../../utils/constants';
import mockCourses from '../../services/mock/courses.json';

const fetchCoursesAction = createAsyncThunk(
  'courses/fetch',
  async (_, { rejectWithValue }) => {
    try {
      // insert api call here

      // eslint-disable-next-line no-inner-declarations
      async function timeout() {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, SPINNER_DELAY));
      }

      await timeout();

      return mockCourses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchCoursesAction;