import { BaseApi, privateApi } from '../core';
import type { LessonModel, TestModel } from './types';

const SERVICE_URL = '/lessons/';

class LessonsApi extends BaseApi {
  getLesson = (id: number) =>
    this.createRequest<LessonModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/`),
      mock: () => import('./mock/lesson'),
    });

  getTest = (id: number) =>
    this.createRequest<TestModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/quiz/`),
      mock: () => import('./mock/test'),
    });
}

export const lessonsApi = new LessonsApi();
