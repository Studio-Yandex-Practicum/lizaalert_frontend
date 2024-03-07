import { BaseApi, privateApi } from '../core';
import type { HomeworkModel, HomeworkAnswerData } from './types';

const SERVICE_URL = (lessonId: string) => `/lessons/${lessonId}/homework/`;

class HomeworkApi extends BaseApi {
  getHomework = (id: string) =>
    this.createRequest<HomeworkModel>({
      request: () => privateApi.get(SERVICE_URL(id)),
      mock: () => import('./mock/homework'),
    });

  updateHomework = ({ id, answer }: HomeworkAnswerData) =>
    this.createRequest<HomeworkModel>({
      request: () => privateApi.post(SERVICE_URL(id), answer),
      mock: () => import('./mock/homework'),
    });
}

export const homeworkApi = new HomeworkApi();
