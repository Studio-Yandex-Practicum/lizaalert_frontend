import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { authorizationApi } from 'api/authorization';
// import mockAuth from '../../api/mock/auth.json';

export const fetchAuth = createAsyncThunk('auth/fetch', async (authData) => {
  const { user, isRememberMe } = authData;

  try {
    const token = await authorizationApi.login(user);
    if (isRememberMe) {
      localStorage.setItem('jwt.access', token.access);
      localStorage.setItem('jwt.refresh', token.refresh);
    } else {
      sessionStorage.setItem('jwt.access', token.access);
      sessionStorage.setItem('jwt.refresh', token.refresh);
    }
    console.log('token.access', token.access);
    return token.access;
  } catch (error) {
    throw new Error('Ошибка авторизации');
  }
});

export const checkAuth = createAsyncThunk('auth/check', async () => {
  const tokenAccess = localStorage.getItem('jwt.access');
  console.log('tokenAccess:::', tokenAccess);

  const tokenRefresh = localStorage.getItem('jwt.refresh');
  console.log('tokenRefresh:::', tokenRefresh);

  const currentTokenAccess = {
    token: tokenAccess,
  };

  const currentTokenRefresh = {
    refresh: tokenRefresh,
  };
  console.log('currentTokenAccess::::', currentTokenAccess);
  console.log('currentTokenRefresh::::', currentTokenRefresh);

  // ЗАПРОС НА ВЕРИФИКАЦИЮ ТОКЕНА
  async function verifyToken() {
    if (currentTokenAccess) {
      try {
        await authorizationApi.checkToken(currentTokenAccess);
        console.log('token свеж');
      } catch (error) {
        console.log('token протух');
        await authorizationApi.refreshToken(currentTokenRefresh);
        console.log('token обновлен');
      }
    } else {
      console.log('нет токена - авторизуйся');
    }
  }

  await verifyToken();
  return true;
});
