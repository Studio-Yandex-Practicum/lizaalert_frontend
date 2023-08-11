import { BaseApi } from '../base';
import type { RegistrationModel, RegistrationFormData } from './types';

const SERVICE_URL = '/auth/';

class RegistrationApi extends BaseApi {
  postRegistration = (registrationData: RegistrationFormData) =>
    this.createRequest<RegistrationModel>({
      request: () => this.api.post(`${SERVICE_URL}users/`, registrationData),
      mock: () => import('./mock/registration'),
    });
}

export const registrationApi = new RegistrationApi();
