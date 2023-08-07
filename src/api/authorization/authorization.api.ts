import { BaseApi } from '../base';
import type { AuthorizationModel } from './types';

const SERVICE_URL = '/token/login/';

class AuthorizationApi extends BaseApi {
  postRegistration = ({ email, password }: AuthorizationModel) =>
    this.createRequest<AuthorizationModel>({
      request: this.api.post(SERVICE_URL, {
        data: {
          email,
          password,
        },
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: '',
        },
      }),
      mock: () => import('./mock/authorization'),
    })
      .then((response) => {
        console.log('response Authorization ===', response);
      })
      .catch((error) => {
        console.log('error Authorization ===', error);
      });
}

// Получаем токен
// const SERVICE_URL_TOKEN = '/jwt/create/';
// class CheckToken extends BaseApi {
//   getToken = ({ token }: GetTokenModel) => {
//     this.createRequest<GetTokenModel>({
//       request: this.api.get(SERVICE_URL_TOKEN),
//     });
//   };
// }

export const authorizationApi = new AuthorizationApi();
