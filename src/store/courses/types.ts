import type { CoursesModel } from 'api/courses/types';
import { ProcessEnum } from 'utils/constants';

export type EnrollStatusType = {
  process: ProcessEnum;
  error: string | null;
};

export type CoursesThunkState = {
  process: ProcessEnum;
  error: string | null;
  count: CoursesModel['count'];
  courses: CoursesModel['results'];
  enrollStatus: Record<string, EnrollStatusType>;
};

export type CoursesState = CoursesThunkState;
