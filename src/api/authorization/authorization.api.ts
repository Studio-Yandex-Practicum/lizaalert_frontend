import { BaseApi } from '../base';
import type { AuthorizationModel } from './types';

const SERVICE_URL = 'http://127.0.0.1:8000/api/v1/auth/jwt/create/';

class AuthorizationApi extends BaseApi {
  postRegistration = ({ email, password }: AuthorizationModel) =>
    this.createRequest<AuthorizationModel>({
      request: this.api.post(SERVICE_URL, {
        data: {
          email,
          password,
        },
        // отдаем заголовок (?)
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: '',
        },
      }),
      mock: () => import('./mock/authorization'),
    });
  //  обработка ответа должна уйти в редакс (отсюда удаляем все)?
  // .then((response) => {
  //   console.log('response Authorization ===', response);
  // })
  // .catch((error) => {
  //   console.log('error Authorization ===', error);
  // });
}

export const authorizationApi = new AuthorizationApi();
