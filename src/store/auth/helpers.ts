import { ACCESS_TOKEN, REFRESH_TOKEN } from 'utils/constants';
import { authorizationApi } from 'api/authorization';
import { privateApi } from 'api/core';

export const getAccessToken = () =>
  sessionStorage.getItem(ACCESS_TOKEN) || localStorage.getItem(ACCESS_TOKEN);

export const getRefreshToken = () => {
  const data = {
    storage: sessionStorage,
    refresh: sessionStorage.getItem(REFRESH_TOKEN),
  };

  if (data.refresh) {
    return data;
  }

  data.storage = localStorage;
  data.refresh = localStorage.getItem(REFRESH_TOKEN);

  return data;
};

export const refreshAuthToken = async () => {
  const { storage, refresh } = getRefreshToken();

  if (!refresh) {
    return null;
  }

  try {
    const token = await authorizationApi.refreshToken({
      refresh,
    });

    storage.setItem(ACCESS_TOKEN, token.access);
    storage.setItem(REFRESH_TOKEN, token.refresh);
    privateApi.setAuthHeader(token.access);
    return token.access;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const checkAuthToken = async () => {
  const access = getAccessToken();

  if (!access) {
    const renewedAccess = await refreshAuthToken();
    return !!renewedAccess;
  }

  try {
    await authorizationApi.verifyToken({
      token: access,
    });
    privateApi.setAuthHeader(access);
    return !!access;
  } catch (err) {
    const renewedAccess = await refreshAuthToken();
    return !!renewedAccess;
  }
};
