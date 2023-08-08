import { BaseApi } from '../base';
import type { AuthorizationModel } from './types';

const SERVICE_URL = 'http://127.0.0.1:8000/api/v1/auth/jwt/create/';

class AuthorizationApi extends BaseApi {
  postAuthorization = ({ email, password }: AuthorizationModel) =>
    this.createRequest<AuthorizationModel>({
      request: () =>
        this.api.post(SERVICE_URL, {
          email,
          password,
        }),
      mock: () => import('./mock/authorization'),
    });
}

export const authorizationApi = new AuthorizationApi();
