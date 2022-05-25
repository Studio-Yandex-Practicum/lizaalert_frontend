import { createAsyncThunk } from '@reduxjs/toolkit';
import mockUser from '../../services/mock/user.json';

const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function timeout() {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, 1000));
      }
      await timeout();
      return mockUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchUser;
