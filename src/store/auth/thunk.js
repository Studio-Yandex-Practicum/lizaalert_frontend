import { createAsyncThunk } from '@reduxjs/toolkit';
import mockAuth from '../../api/mock/auth.json';

export const fetchAuth = createAsyncThunk('auth/fetch', async (authData) => {
  const { isRememberMe } = authData;

  // eslint-disable-next-line no-inner-declarations
  async function timeout() {
    // eslint-disable-next-line no-promise-executor-return,@typescript-eslint/no-implied-eval
    return new Promise((resolve) => setTimeout(resolve(mockAuth), 2000));
  }

  const jwt = await timeout();
  if (isRememberMe) {
    localStorage.setItem('jwt', jwt.token);
  } else {
    sessionStorage.setItem('jwt', jwt.token);
  }
  return jwt;
});

export const checkAuth = createAsyncThunk('auth/check', async () => {
  // eslint-disable-next-line no-inner-declarations
  async function timeout() {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  await timeout();
  return false;
});
