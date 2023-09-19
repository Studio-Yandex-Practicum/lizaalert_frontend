import { BaseApi } from '../base';
import type {
  AuthorizationModel,
  LoginFormData,
  RegistrationFormData,
  RegistrationModel,
  RefreshTokenData,
  AccessTokenModel,
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

  checkToken = (checkTokenData: AccessTokenModel) =>
    this.createRequest<AccessTokenModel>({
      request: () => this.api.post(`${SERVICE_URL}jwt/verify/`, checkTokenData),
    });

  refreshToken = (refreshTokenData: RefreshTokenData) =>
    this.createRequest<AccessTokenModel>({
      request: () =>
        this.api.post(`${SERVICE_URL}jwt/refresh/`, refreshTokenData),
      mock: () => import('./mock/login'),
    });
}
export const authorizationApi = new AuthorizationApi();
