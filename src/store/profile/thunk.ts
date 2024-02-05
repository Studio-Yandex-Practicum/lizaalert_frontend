import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AccountFormData, ProfileModel } from 'api/profile';
import { profileApi } from 'api/profile/profile.api';

const transformProfileData = (profile: ProfileModel) => ({
  id: profile.id,
  accountData: {
    phone_number: profile.phone_number,
    email: profile.email,
  },
  personalData: {
    full_name: profile.full_name,
    birth_date: profile.birth_date,
    location: profile.location,
  },
  accountOverview: {
    full_name: profile.full_name,
    count_pass_course: profile.count_pass_course,
    department: profile.department,
    call_sign: profile.call_sign,
    photo: profile.photo,
  },
});

export const fetchProfile = createAsyncThunk('profile/fetch', async () => {
  const profile = await profileApi.getProfile();

  return transformProfileData(profile);
});

export const editProfile = createAsyncThunk(
  'profile/edit',
  async (profileData: AccountFormData | FormData) => {
    const profile = await profileApi.editProfile(profileData);

    return transformProfileData(profile);
  }
);
