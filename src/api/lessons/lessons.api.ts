import { BaseApi, privateApi } from '../core';
import type {
  AnswersValidationData,
  LessonModel,
  TestModel,
  TestResultModel,
} from './types';

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

  getTest = (id: string) =>
    this.createRequest<TestModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/quiz/`),
      mock: () => import('./mock/test'),
    });

  createTest = (id: string) =>
    this.createRequest<AnswersValidationData>({
      request: () => privateApi.post(`${SERVICE_URL}${id}/quiz/run/`),
    });

  postAnswers = (data: AnswersValidationData) =>
    this.createRequest<TestResultModel>({
      request: () =>
        privateApi.post(`${SERVICE_URL}${data.id}/quiz/answer/`, data.answers),
    });
}

export const lessonsApi = new LessonsApi();
