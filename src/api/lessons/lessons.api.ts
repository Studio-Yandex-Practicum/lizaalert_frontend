import { BaseApi, privateApi } from '../core';
import type { TestModel } from './types';

const SERVICE_URL = '/lessons/';

class LessonsApi extends BaseApi {
  getTest = (id: number) =>
    this.createRequest<TestModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/quiz/`),
      mock: () => import('./mock/test'),
    });
}

export const lessonsApi = new LessonsApi();
