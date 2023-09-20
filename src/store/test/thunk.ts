import { createAsyncThunk } from '@reduxjs/toolkit';
import { SPINNER_DELAY } from '../../utils/constants';
import mockTest from '../../api/mock/test.json';
import { lessonsTestApi } from '../../api/lessons';

export const fetchTest = createAsyncThunk(
  'test/fetch',
  async (lessonId: number) => {
    // eslint-disable-next-line no-inner-declarations
    async function timeout() {
      // eslint-disable-next-line no-promise-executor-return
      return new Promise((resolve) => setTimeout(resolve, SPINNER_DELAY));
    }
    const response = await lessonsTestApi.getTest(lessonId);
    await timeout();
    return response.questions ? response : mockTest;
  }
);
