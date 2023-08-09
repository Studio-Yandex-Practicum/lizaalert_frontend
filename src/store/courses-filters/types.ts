import type { CoursesFiltersModel } from 'api/courses-filters';
import { ProcessEnum } from 'utils/constants';

export type CoursesFiltersThunkState = {
  process: ProcessEnum;
  error: string | null;
  count: CoursesFiltersModel['count'];
  filters: CoursesFiltersModel['results'];
};

export type CoursesFiltersState = CoursesFiltersThunkState;
