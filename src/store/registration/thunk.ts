import { createAsyncThunk } from '@reduxjs/toolkit';
import { authorizationApi, RegistrationFormData } from 'api/authorization';

export const fetchRegistration = createAsyncThunk(
  'register/fetch',
  async (user: RegistrationFormData) => {
    const result = await authorizationApi.register(user);
    return !!result;
  }
);
