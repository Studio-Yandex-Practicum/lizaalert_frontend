import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { authorizationApi } from 'api/authorization';
import { UserLoginFormData } from 'components/organisms/login-form';

export const fetchAuth = createAsyncThunk(
  'auth/fetch',
  async (authData: { user: UserLoginFormData; isRememberMe: boolean }) => {
    const { user, isRememberMe } = authData;

    try {
      const token = await authorizationApi.login(user);
      if (isRememberMe) {
        localStorage.setItem('token.access', token.access);
        localStorage.setItem('token.refresh', token.refresh);
      } else {
        sessionStorage.setItem('token.access', token.access);
        sessionStorage.setItem('token.refresh', token.refresh);
      }
      return token.access;
    } catch (error) {
      throw new Error('Ошибка авторизации');
    }
  }
);

export const checkAuth = createAsyncThunk('auth/check', async () => {
  const tokenAccess = localStorage.getItem('token.access');

  const tokenRefresh = localStorage.getItem('token.refresh');

  const currentTokenAccess = {
    token: tokenAccess || '',
  };

  const currentTokenRefresh = {
    refresh: tokenRefresh || '',
  };

  // верификация токена текущего пользователя
  async function verifyToken() {
    if (currentTokenAccess) {
      try {
        await authorizationApi.checkToken(currentTokenAccess);
      } catch (error) {
        console.log('token протух');
        await authorizationApi.refreshToken(currentTokenRefresh);
        // TODO замена в localStorage на новый токен
      }
    } else {
      // TODO отправка на страницу авторизации
      console.log('нет токена - авторизуйся');
    }
  }

  await verifyToken();
  return true;
});
