import { BaseApi, privateApi } from '../core';
import type { ProfileModel, AccountFormData } from './types';

const SERVICE_URL = '/profile/';

class ProfileApi extends BaseApi {
  getProfile = () =>
    this.createRequest<ProfileModel>({
      request: () => privateApi.get(SERVICE_URL),
      mock: () => import('./mock/profile'),
    });

  editProfile = (profileData: AccountFormData | FormData) =>
    this.createRequest<ProfileModel>({
      request: () => privateApi.patch(SERVICE_URL, profileData),
      mock: () => import('./mock/profile'),
    });
}

export const profileApi = new ProfileApi();
