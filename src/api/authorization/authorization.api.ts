import { BaseApi } from '../base';
import type {
  AuthorizationModel,
  LoginFormData,
  RegistrationFormData,
  RegistrationModel,
  RefreshTokenData,
  VerifyTokenData,
} from './types';

const SERVICE_URL = '/auth/';

class AuthorizationApi extends BaseApi {
  login = (loginData: LoginFormData) =>
    this.createRequest<AuthorizationModel>({
      request: () => this.api.post(`${SERVICE_URL}jwt/create/`, loginData),
      mock: () => import('./mock/login'),
    });

  register = (registrationData: RegistrationFormData) =>
    this.createRequest<RegistrationModel>({
      request: () => this.api.post(`${SERVICE_URL}users/`, registrationData),
      mock: () => import('./mock/registration'),
    });

  verifyToken = (verifyTokenData: VerifyTokenData) =>
    this.createRequest({
      request: () =>
        this.api.post(`${SERVICE_URL}jwt/verify/`, verifyTokenData),
    });

  refreshToken = (refreshTokenData: RefreshTokenData) =>
    this.createRequest<AuthorizationModel>({
      request: () =>
        this.api.post(`${SERVICE_URL}jwt/refresh/`, refreshTokenData),
      mock: () => import('./mock/login'),
    });

  setAuthHeader = (token: string) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
}
export const authorizationApi = new AuthorizationApi();
