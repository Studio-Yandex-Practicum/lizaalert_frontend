import { BaseApi, publicApi } from '../core';
import type {
  AuthorizationModel,
  LoginFormData,
  RefreshTokenData,
  RegistrationFormData,
  RegistrationModel,
  VerifyTokenData,
  OauthTokenData,
} from './types';

const SERVICE_URL = '/auth/';

class AuthorizationApi extends BaseApi {
  login = (loginData: LoginFormData) =>
    this.createRequest<AuthorizationModel>({
      request: () => publicApi.post(`${SERVICE_URL}jwt/create/`, loginData),
      mock: () => import('./mock/login'),
    });

  register = (registrationData: RegistrationFormData) =>
    this.createRequest<RegistrationModel>({
      request: () => publicApi.post(`${SERVICE_URL}users/`, registrationData),
      mock: () => import('./mock/registration'),
    });

  verifyToken = (verifyTokenData: VerifyTokenData) =>
    this.createRequest({
      request: () =>
        publicApi.post(`${SERVICE_URL}jwt/verify/`, verifyTokenData),
    });

  refreshToken = (refreshTokenData: RefreshTokenData) =>
    this.createRequest<AuthorizationModel>({
      request: () =>
        publicApi.post(`${SERVICE_URL}jwt/refresh/`, refreshTokenData),
      mock: () => import('./mock/login'),
    });

  loginByYandex = (oauthTokenData: OauthTokenData) =>
    this.createRequest<AuthorizationModel>({
      request: () =>
        publicApi.post(`${SERVICE_URL}token/create/`, oauthTokenData),
    });
}

export const authorizationApi = new AuthorizationApi();
