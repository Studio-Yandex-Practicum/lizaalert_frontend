import { BaseApi } from '../base';
import type { CourseModel } from './types';

const SERVICE_URL = '/courses/';

class CourseApi extends BaseApi {
  getCourse = (id: number) =>
    this.createRequest<CourseModel>({
      request: this.api.get(`${SERVICE_URL}${id}/`),
      mock: () => import('./mock/course.mock'),
    });

  // create course

  // edit course

  // delete course???
}

export const courseApi = new CourseApi();
