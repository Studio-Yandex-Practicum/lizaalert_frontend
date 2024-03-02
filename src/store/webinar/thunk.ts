import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessonsApi } from 'api/lessons';

export const fetchWebinarById = createAsyncThunk(
  'webinar/fetch',
  async (id: string) => {
    const webinar = await lessonsApi.getWebinar(id);
    return webinar;
  }
);
