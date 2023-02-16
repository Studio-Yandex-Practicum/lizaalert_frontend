import type { CoursesModel } from 'api/courses/types';

export type CoursesThunkState = {
  isLoading: boolean;
  error: string | null;
  count: CoursesModel['count'];
  results: Nullable<CoursesModel['results']>;
};

export type CoursesState = CoursesThunkState;
