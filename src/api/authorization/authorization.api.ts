import { BaseApi } from '../base';
import type { AuthorizationModel, LoginFormData } from './types';

const SERVICE_URL = '/auth/';

class AuthorizationApi extends BaseApi {
  login = (loginData: LoginFormData) =>
    this.createRequest<AuthorizationModel>({
      request: () => this.api.post(`${SERVICE_URL}jwt/create/`, loginData),
      mock: () => import('./mock/login'),
    });
}

export const authorizationApi = new AuthorizationApi();
