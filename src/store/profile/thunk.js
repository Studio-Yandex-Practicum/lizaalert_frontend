import { createAsyncThunk } from '@reduxjs/toolkit';
import { SPINNER_DELAY } from '../../utils/constants';
import mockProfile from '../../api/mock/profile.json';

export const fetchProfile = createAsyncThunk(
  'profile/fetch',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (profileId) => {
    // insert api call here with profileId, that comes from url params

    // eslint-disable-next-line no-inner-declarations
    async function timeout() {
      // eslint-disable-next-line no-promise-executor-return
      return new Promise((resolve) => setTimeout(resolve, SPINNER_DELAY));
    }

    await timeout();

    return mockProfile;
  }
);
