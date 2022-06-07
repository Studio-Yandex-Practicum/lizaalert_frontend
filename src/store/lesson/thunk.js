import { createAsyncThunk } from '@reduxjs/toolkit';
import { SPINNER_DELAY } from '../../utils/constants';
import mockLessons from '../../services/mock/lessons.json';

const fetchLessonByIdAction = createAsyncThunk(
  'lesson/fetch',
  async (lessonId, { rejectWithValue }) => {
    try {
      // insert api call here

      // eslint-disable-next-line no-inner-declarations
      async function timeout() {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, SPINNER_DELAY));
      }

      await timeout();

      return mockLessons[lessonId - 1];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchLessonByIdAction;
