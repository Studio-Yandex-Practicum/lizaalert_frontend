import { createAsyncThunk } from '@reduxjs/toolkit';
import { SPINNER_DELAY } from '../../utils/constants';
import mockLessons from '../../api/mock/lessons.json';

export const fetchLessonById = createAsyncThunk(
  'lesson/fetch',
  async (lessonId) => {
    // insert api call here

    // eslint-disable-next-line no-inner-declarations
    async function timeout() {
      // eslint-disable-next-line no-promise-executor-return
      return new Promise((resolve) => setTimeout(resolve, SPINNER_DELAY));
    }

    await timeout();

    return mockLessons[lessonId - 1];
  }
);
