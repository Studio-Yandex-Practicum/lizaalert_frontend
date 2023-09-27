import { BaseApi, privateApi } from '../core';
import type { CourseModel } from './types';

const SERVICE_URL = '/courses/';

class CourseApi extends BaseApi {
  getCourse = (id: string) =>
    this.createRequest<CourseModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/`),
      mock: () => import('./mock/course'),
    });

  setCourseStatus = (id: number) =>
    this.createRequest<CourseModel>({
      request: () => this.api.post(`${SERVICE_URL}${id}/enroll/`),
      mock: () => import('./mock/course'),
    });

  // create course

  // edit course

  // delete course???
}

export const courseApi = new CourseApi();
