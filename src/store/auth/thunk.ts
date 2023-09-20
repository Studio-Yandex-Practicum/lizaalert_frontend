import { createAsyncThunk } from '@reduxjs/toolkit';
import { authorizationApi } from 'api/authorization';
import type { LoginFormData } from 'api/authorization';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'utils/constants';

export const fetchAuth = createAsyncThunk(
  'auth/fetch',
  async (authData: { user: LoginFormData; isRememberMe: boolean }) => {
    const { user, isRememberMe } = authData;

    const token = await authorizationApi.login(user);
    const storage = isRememberMe ? localStorage : sessionStorage;

    storage.setItem(ACCESS_TOKEN, token.access);
    storage.setItem(REFRESH_TOKEN, token.refresh);

    authorizationApi.setAuthHeader(token.access);
    return token.access;
  }
);

export const refreshToken = createAsyncThunk('auth/refresh', async () => {
  const tokenRefresh =
    sessionStorage.getItem(REFRESH_TOKEN) ||
    localStorage.getItem(REFRESH_TOKEN);
  if (!tokenRefresh) {
    return null;
  }
  const token = await authorizationApi.refreshToken({
    refresh: tokenRefresh,
  });
  localStorage.setItem(ACCESS_TOKEN, token.access);
  localStorage.setItem(REFRESH_TOKEN, token.refresh);
  authorizationApi.setAuthHeader(token.access);
  return token.access;
});

export const checkAuth = createAsyncThunk(
  'auth/check',
  async (_, { dispatch }) => {
    const tokenAccess =
      sessionStorage.getItem(ACCESS_TOKEN) ||
      localStorage.getItem(ACCESS_TOKEN);
    if (!tokenAccess) {
      void dispatch(refreshToken());
      return;
    }
    try {
      await authorizationApi.verifyToken({
        token: tokenAccess,
      });
      authorizationApi.setAuthHeader(tokenAccess);
      // eslint-disable-next-line consistent-return
      return tokenAccess;
    } catch (err) {
      void dispatch(refreshToken());
    }
  }
);
