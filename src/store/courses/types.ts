import type { CoursesModel } from 'api/courses/types';
import { ProcessEnum } from 'utils/constants';

export type CoursesThunkState = {
  process: ProcessEnum;
  error: string | null;
  count: CoursesModel['count'];
  courses: Nullable<CoursesModel['results']>;
};

export type CoursesState = CoursesThunkState;
