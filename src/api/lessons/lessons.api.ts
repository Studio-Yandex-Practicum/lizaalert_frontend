import { TestResultType } from 'components/organisms/test/types';
import { BaseApi, privateApi } from '../core';
import type { AnswersOnValidationModel, LessonModel, TestModel } from './types';

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
      // mock: () => import('./mock/test'),
    });

  createTest = (id: string) =>
    this.createRequest<AnswersOnValidationModel>({
      request: () => privateApi.post(`${SERVICE_URL}${id}/quiz/run/`),
    });

  postAnswers = (data: AnswersOnValidationModel) =>
    this.createRequest<TestResultType>({
      request: () =>
        privateApi.post(
          `${SERVICE_URL}${data.id}/quiz/answer/`,
          data.answersData
        ),
    });
}

export const lessonsApi = new LessonsApi();
