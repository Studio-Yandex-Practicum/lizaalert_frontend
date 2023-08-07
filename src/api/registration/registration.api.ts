import { BaseApi } from '../base';
import type { RegistrationModel } from './types';

// const SERVICE_URL = 'http://127.0.0.1:8000/api/v1/auth/users/';
const BASE_URL = 'http://127.0.0.1:8000/api/v1/auth/users/';

class RegistrationApi extends BaseApi {
  postRegistration = ({
    username,
    email,
    password,
    re_password,
  }: RegistrationModel) =>
    this.createRequest<RegistrationModel>({
      request: () =>
        this.api.post(BASE_URL, {
          username,
          email,
          password,
          re_password,
        }),
      mock: () => import('./mock/registration'),
    });
}

export const registrationApi = new RegistrationApi();
