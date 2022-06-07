import { createAsyncThunk } from '@reduxjs/toolkit';
import mockAuth from '../../services/mock/auth.json';

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (authData, { rejectWithValue }) => {
    const { email, tel } = authData.user;
    const { isRememberMe } = authData;
    try {
      // eslint-disable-next-line no-inner-declarations
      async function timeout() {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve(mockAuth), 2000));
      }
      const jwt = await timeout();
      if (jwt.token) {
        localStorage.setItem('jwt', jwt.token);
      }
      if (isRememberMe) {
        localStorage.setItem('authData', JSON.stringify({ email, tel }));
      }
      return jwt;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function timeout() {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve(), 2000));
      }
      await timeout();
      return localStorage.getItem('jwt');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
