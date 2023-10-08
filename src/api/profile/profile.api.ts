import { BaseApi, privateApi } from '../core';
import type { ProfileModel } from './types';

const SERVICE_URL = '/profile/';

class ProfileApi extends BaseApi {
  getUserProfile = () =>
    this.createRequest<ProfileModel>({
      request: () => privateApi.get(SERVICE_URL),
      mock: () => import('./mock/profile'),
    });
}

export const profileApi = new ProfileApi();
