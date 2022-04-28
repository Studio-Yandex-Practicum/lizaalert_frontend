import { createAsyncThunk } from '@reduxjs/toolkit';
import mockTest from '../../services/mock/test.json';

const fetchTest = createAsyncThunk(
  'test/fetchTest',
  async (_, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function timeout() {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, 1000));
      }
      await timeout();
      return mockTest;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchTest;
