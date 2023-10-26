import { BaseApi, privateApi } from '../core';
import type {
  LessonModel,
  TestModel,
  TestOnValidationData,
  AnswersOnValidationModel,
} from './types';

const SERVICE_URL = '/lessons/';

class LessonsApi extends BaseApi {
  getLesson = (id: string) =>
    this.createRequest<LessonModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/`),
      mock: () => import('./mock/lesson'),
    });

  getTest = (id: number) =>
    this.createRequest<TestModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/quiz/`),
      // mock: () => import('./mock/test'),
    });

  postTest = (id: number, answer: TestOnValidationData[]) =>
    this.createRequest<AnswersOnValidationModel>({
      request: () => privateApi.post(`${SERVICE_URL}${id}/quiz/run/`, answer),
    });
}

export const lessonsApi = new LessonsApi();
