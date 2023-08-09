import { BaseApi } from '../base';
import type { CoursesFiltersModel } from './types';

const SERVICE_URL = '/courses_filters/';

class CoursesFiltersApi extends BaseApi {
  getFilters = () =>
    this.createRequest<CoursesFiltersModel>({
      request: () => this.api.get(SERVICE_URL),
      mock: () => import('./mock/courses-filters'),
    });
}

export const coursesFiltersApi = new CoursesFiltersApi();
