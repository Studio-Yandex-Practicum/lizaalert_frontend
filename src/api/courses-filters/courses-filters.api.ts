import { BaseApi, privateApi } from '../core';
import type { CoursesFiltersModel } from './types';

const SERVICE_URL = '/filters/';

class CoursesFiltersApi extends BaseApi {
  getFilters = () =>
    this.createRequest<CoursesFiltersModel>({
      request: () => privateApi.get(SERVICE_URL),
      mock: () => import('./mock/courses-filters'),
    });
}

export const coursesFiltersApi = new CoursesFiltersApi();
