import { BaseApi } from '../base';
import type { TestModel } from './types';

const SERVICE_URL = '/lessons/';

class LessonsApi extends BaseApi {
  getTest = (id: number) =>
    this.createRequest<TestModel>({
      request: () => this.api.get(`${SERVICE_URL}${id}/quiz/`),
      mock: () => import('./mock/test'),
    });
}

export const lessonsApi = new LessonsApi();
