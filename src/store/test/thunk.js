import { createAsyncThunk } from '@reduxjs/toolkit';
import { SPINNER_DELAY } from '../../utils/constants';
import mockTest from '../../api/mock/test.json';

export const fetchTest = createAsyncThunk('test/fetch', async () => {
  // eslint-disable-next-line no-inner-declarations
  async function timeout() {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, SPINNER_DELAY));
  }

  await timeout();
  return mockTest;
});
