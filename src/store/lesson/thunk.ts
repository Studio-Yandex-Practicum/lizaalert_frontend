import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiInterceptorConfig, privateApi } from 'api/core';
import { lessonsApi } from 'api/lessons';

const getLessonInterceptor = (): ApiInterceptorConfig => ({
  type: 'response',
  name: 'lesson/fetch',
  onFulfilled: (res) => res,
  onRejected: async (err) => {
    if ('detail' in err) {
      const error = { message: err.detail };
      return Promise.reject(error);
    }
    return Promise.reject(err);
  },
});

export const fetchLessonById = createAsyncThunk(
  'lesson/fetch',
  async (id: string) => {
    privateApi.addInterceptor(getLessonInterceptor());
    const lesson = await lessonsApi.getLesson(id);
    return lesson;
  }
);

export const completeLesson = createAsyncThunk(
  'lesson/complete',
  async (id: string) => {
    await lessonsApi.completeLesson(id);
  }
);
