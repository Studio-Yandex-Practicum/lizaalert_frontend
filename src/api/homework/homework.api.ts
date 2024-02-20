import { BaseApi, privateApi } from '../core';
import type { HomeworkModel, HomeworkAnswerData } from './types';

const SERVICE_URL = (lessonId: number) => `lessons/${lessonId}/homework/`;

class HomeworkApi extends BaseApi {
  getHomework = (id: number) =>
    this.createRequest<HomeworkModel>({
      request: () => privateApi.get(`${SERVICE_URL(id)}/`),
      mock: () => import('./mock/homework'),
    });

  updateHomework = (homeworkAnswerData: HomeworkAnswerData) =>
    this.createRequest<HomeworkModel>({
      request: () =>
        privateApi.post(
          `${SERVICE_URL(homeworkAnswerData.id)}/`,
          homeworkAnswerData.answer
        ),
      mock: () => import('./mock/homework'),
    });
}

export const homeworkApi = new HomeworkApi();
