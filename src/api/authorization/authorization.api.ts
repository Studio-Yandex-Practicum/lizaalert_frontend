import { BaseApi } from '../base';
import type {
  AuthorizationModel,
  LoginFormData,
  RegistrationFormData,
  RegistrationModel,
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
}

export const authorizationApi = new AuthorizationApi();
