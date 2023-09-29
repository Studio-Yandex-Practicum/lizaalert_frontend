import { BaseApi, privateApi } from '../core';
import type { CoursesModel, GetCoursesData } from './types';

const SERVICE_URL = '/courses/';

class CoursesApi extends BaseApi {
  getCourses = ({ page, pageSize, params = {} }: GetCoursesData) =>
    this.createRequest<CoursesModel>({
      request: () =>
        privateApi.get(SERVICE_URL, {
          params: {
            page,
            page_size: pageSize,
            ...params,
          },
        }),
      mock: () => import('./mock/courses'),
    });
}

export const coursesApi = new CoursesApi();
