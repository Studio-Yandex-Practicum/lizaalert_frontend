import { BaseApi } from '../base';
import type { CoursesModel, GetCoursesData } from './types';

const SERVICE_URL = '/courses/';

class CoursesApi extends BaseApi {
  getCourses = ({ page, pageSize, params = {} }: GetCoursesData) =>
    this.createRequest<CoursesModel>({
      request: () =>
        this.api.get(SERVICE_URL, {
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
