import { BaseApi, privateApi } from '../core';
import { CourseModel, CurrentLessonModel, EnrollModel } from './types';

const SERVICE_URL = '/courses/';

class CourseApi extends BaseApi {
  getCourse = (id: string) =>
    this.createRequest<CourseModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/`),
      mock: () => import('./mock/course'),
    });

  enroll = (id: number) =>
    this.createRequest<EnrollModel>({
      request: () => privateApi.post(`${SERVICE_URL}${id}/enroll/`),
      mock: () => import('./mock/enroll'),
    });

  unroll = (id: number) =>
    this.createRequest({
      request: () => privateApi.post(`${SERVICE_URL}${id}/unroll/`),
    });

  getCurrentLesson = (id: number) =>
    this.createRequest<CurrentLessonModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/current_lesson/`),
      mock: () => import('./mock/current-lesson'),
    });
}

export const courseApi = new CourseApi();
