import { BaseApi } from '../base';
import type { CourseModel } from '../course/types';

const SERVICE_URL = '/courses/';

class ContentApi extends BaseApi {
  getContent = (id: number) =>
    this.createRequest<CourseModel>({
      request: () => this.api.get(`${SERVICE_URL}${id}/`),
      mock: () => import('../mock/course-content.json'),
    });
}

export const contentApi = new ContentApi();
