import type { CoursesModel } from 'api/courses/types';
import { ProcessEnum } from 'utils/constants';

export type EnrollStatusType = {
  [key: string]: {
    process: ProcessEnum;
    error: string | null;
  };
};

export type CoursesThunkState = {
  process: ProcessEnum;
  error: string | null;
  count: CoursesModel['count'];
  courses: CoursesModel['results'];
  enrollStatus: EnrollStatusType;
};

export type CoursesState = CoursesThunkState;
