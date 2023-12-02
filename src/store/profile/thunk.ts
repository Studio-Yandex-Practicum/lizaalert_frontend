import { createAsyncThunk } from '@reduxjs/toolkit';
import { profileApi } from 'api/profile';

export const fetchProfile = createAsyncThunk('profile/fetch', async () => {
  const profileData = await profileApi.getUserProfile();
  return profileData;
});
