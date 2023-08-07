import { BaseApi } from 'api/base';
import { GetTokenModel } from './types';

const SERVICE_URL_TOKEN = 'http://127.0.0.1:8000/api/v1/auth/jwt/verify/';

class CheckToken extends BaseApi {
  getToken = ({ token }: GetTokenModel) => {
    this.createRequest<GetTokenModel>({
      request: () =>
        this.api.post(SERVICE_URL_TOKEN, {
          data: {
            token,
          },
        }),
    })
      //  обработка ответа должна уйти в редакс (отсюда удаляем все)?
      .then((response) => {
        console.log('response Authorization ===', response);
      })
      .catch((error) => {
        console.log('error Authorization ===', error);
      });
  };
}

export const checkToken = new CheckToken();
