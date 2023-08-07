import { BaseApi } from '../base';
import type { RegistrationModel } from './types';

// const SERVICE_URL = 'http://127.0.0.1:8000/api/v1/auth/users/';
const B_URL = 'http://127.0.0.1:8000/api/v1/auth/users/';

class RegistrationApi extends BaseApi {
  postRegistration = ({
    username,
    email,
    password,
    re_password,
  }: RegistrationModel) =>
    this.createRequest<RegistrationModel>({
      request: this.api.post(B_URL, {
        data: {
          username,
          email,
          password,
          re_password,
        },
        // headers: {
        //   'Content-Type': 'application/json;charset=utf-8',
        // },
      }),
      mock: () => import('./mock/registration'),
    });
  // .then((response) => {
  //   console.log('response Registration ===', response);
  // })
  // .catch((error) => {
  //   console.log('error  Registration ===', error);
  // });
}

export const registrationApi = new RegistrationApi();
