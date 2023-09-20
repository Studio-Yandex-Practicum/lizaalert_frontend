import { TestModel } from 'api/lessons/types';
import { BaseApi } from '../base';

const SERVICE_URL = '/lessons/';

class LessonsTestApi extends BaseApi {
  getTest = (id: number) =>
    this.createRequest<TestModel>({
      request: () => this.api.get(`${SERVICE_URL}${id}/quiz/`),
      mock: () => import('./mock/lessons'),
    });
}

export const lessonsTestApi = new LessonsTestApi();
