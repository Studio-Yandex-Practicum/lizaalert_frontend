import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authorizationApi,
  LoginFormData,
  RegistrationFormData,
  OauthTokenData,
} from 'api/authorization';
import { ApiInterceptorConfig, HttpStatusCodes, privateApi } from 'api/core';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'utils/constants';
import type { ApiThunkConfig, ThunkApiDispatch } from '../types';
import { checkAuthToken, refreshAuthToken } from './helpers';

export const fetchAuth = createAsyncThunk(
  'auth/fetch',
  async (authData: { user: LoginFormData; isRememberMe: boolean }) => {
    const { user, isRememberMe } = authData;

    const token = await authorizationApi.login(user);
    const storage = isRememberMe ? localStorage : sessionStorage;

    storage.setItem(ACCESS_TOKEN, token.access);
    storage.setItem(REFRESH_TOKEN, token.refresh);

    privateApi.setAuthHeader(token.access);
    return !!token.access;
  }
);

export const loginByOauth = createAsyncThunk(
  'auth/token',
  async (oauthToken: OauthTokenData) => {
    const tokens = await authorizationApi.loginByYandex(oauthToken);

    if (!tokens.access || !tokens.refresh) {
      return new Error();
    }

    localStorage.setItem(ACCESS_TOKEN, tokens.access);
    localStorage.setItem(REFRESH_TOKEN, tokens.refresh);

    privateApi.setAuthHeader(tokens.access);
    return tokens;
  }
);

export const logout = createAsyncThunk('auth/logout', () => {
  // TODO выполнить запрос на логаут
  sessionStorage.clear();
  localStorage.clear();
  privateApi.removeAuthHeader();
  return false;
});

const getAuthInterceptor = (
  dispatch: ThunkApiDispatch
): ApiInterceptorConfig => ({
  type: 'response',
  name: 'auth/refresh-token',
  onFulfilled: (res) => res,
  // eslint-disable-next-line consistent-return
  onRejected: async (err) => {
    if (err.response?.status !== HttpStatusCodes.Unauthorized) {
      return Promise.reject(err);
    }

    try {
      const result = await refreshAuthToken();

      if (!result || !err.config) {
        throw new Error();
      }

      void privateApi.request(err.config);
    } catch {
      void dispatch(logout());
      throw new Error();
    }
  },
});

export const checkAuth = createAsyncThunk<boolean, null, ApiThunkConfig>(
  'auth/check',
  async (_, { dispatch }) => {
    privateApi.addInterceptor(getAuthInterceptor(dispatch));

    const result = await checkAuthToken();
    return result;
  }
);

export const fetchRegistration = createAsyncThunk<
  void,
  RegistrationFormData,
  ApiThunkConfig
>('auth/register', async (user: RegistrationFormData, { dispatch }) => {
  const result = await authorizationApi.register(user);

  if (!result.id) {
    throw new Error();
  }

  void dispatch(fetchAuth({ user, isRememberMe: false }));
});
