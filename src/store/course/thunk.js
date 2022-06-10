import { createAsyncThunk } from '@reduxjs/toolkit';
import mockCourse from '../../services/mock/course.json';
import { SPINNER_DELAY } from '../../utils/constants';

const fetchCourseAction = createAsyncThunk(
  'course/fetch',
  async (courseId, { rejectWithValue }) => {
    try {
      // insert api call here with courseId, that comes from url params

      // eslint-disable-next-line no-inner-declarations
      async function timeout() {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, SPINNER_DELAY));
      }

      await timeout();

      return mockCourse;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchCourseAction;
