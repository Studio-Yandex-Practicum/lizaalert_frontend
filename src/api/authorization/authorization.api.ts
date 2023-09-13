import { BaseApi } from '../base';
import type {
  AuthorizationModel,
  LoginFormData,
  RegistrationFormData,
  RegistrationModel,
  RefreshTokenData,
  TokenModel,
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

  checkToken = (checkTokenData: TokenModel) =>
    this.createRequest<TokenModel>({
      request: () => this.api.post(`${SERVICE_URL}jwt/verify/`, checkTokenData),
    });

  refreshToken = (refreshTokenData: RefreshTokenData) =>
    this.createRequest<AuthorizationModel>({
      request: () =>
        this.api.post(`${SERVICE_URL}jwt/refresh/`, refreshTokenData),
      // надо заводить какие-то другие моки для этого запроса?
      mock: () => import('./mock/login'),
    });
}
export const authorizationApi = new AuthorizationApi();
