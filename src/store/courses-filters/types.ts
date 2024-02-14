import { SerializedError } from 'api/core';
import type { CoursesFiltersModel } from 'api/courses-filters';
import { ProcessEnum } from 'utils/constants';

export type CoursesFiltersThunkState = {
  process: ProcessEnum;
  error: Nullable<SerializedError>;
  filters: CoursesFiltersModel;
};

export type CoursesFiltersState = CoursesFiltersThunkState;
