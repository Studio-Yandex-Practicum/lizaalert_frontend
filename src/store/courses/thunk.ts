import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { api } from '../../services/network';
import { ICourses } from './types';

const fetchCoursesAction = createAsyncThunk(
  'courses/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api().get<ICourses>('/api/v1/courses/');

      // TODO: Удалить, когда на беке добавят айдишники
      res.data?.results?.map((course) =>
        Object.assign(course, { id: nanoid(8) })
      );

      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export default fetchCoursesAction;
