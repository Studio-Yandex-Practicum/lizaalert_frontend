import { BaseApi } from '../base';
import type { CoursesModel, GetCoursesDataModel } from './types';

const SERVICE_URL = '/courses/';

class CoursesApi extends BaseApi {
  getCourses = ({ page, pageSize }: GetCoursesDataModel) =>
    this.createRequest<CoursesModel>({
      request: this.api.get(SERVICE_URL, {
        params: {
          page,
          page_size: pageSize,
        },
      }),
      mock: () => import('./mock/courses'),
    });
}

export const coursesApi = new CoursesApi();
