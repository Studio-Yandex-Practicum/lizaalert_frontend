import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authorizationApi,
  LoginFormData,
  RegistrationFormData,
} from 'api/authorization';
import { ApiInterceptorConfig, HttpCodes, privateApi } from 'api/core';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'utils/constants';
// import { UserRegisterFormData } from 'components/organisms/register-form';
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  onFulfilled: (res) => res.data,
  // eslint-disable-next-line consistent-return
  onRejected: async (err) => {
    if (err.response?.status !== HttpCodes.Unauthorized) {
      return Promise.reject(err.response?.data);
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

// Почему мы отдаем в createAsyncThunk вторым параметром отдаем null?
// я так понимаю, что из-за этого формируется ошибки  async (user: RegistrationFormData, { dispatch }) => {
export const fetchRegistration = createAsyncThunk<void, null, ApiThunkConfig>(
  'auth/register',
  async (user: RegistrationFormData, { dispatch }) => {
    const result = await authorizationApi.register(user);
    if (!result.user.id) {
      throw new Error();
    }
    void dispatch(fetchAuth({ user, isRememberMe: false }));
  }
);
