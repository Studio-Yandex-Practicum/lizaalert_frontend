import { BaseApi, privateApi } from '../core';
import type { LessonModel, TestModel } from './types';

const SERVICE_URL = '/lessons/';

class LessonsApi extends BaseApi {
  getLesson = (id: string) =>
    this.createRequest<LessonModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/`),
      mock: () => import('./mock/lesson'),
    });

  completeLesson = (id: string) =>
    this.createRequest({
      request: () => privateApi.post(`${SERVICE_URL}${id}/complete/`),
    });

  getTest = (id: number) =>
    this.createRequest<TestModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/quiz/`),
      mock: () => import('./mock/test'),
    });
}

export const lessonsApi = new LessonsApi();
