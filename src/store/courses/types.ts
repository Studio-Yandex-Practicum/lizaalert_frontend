import type { CoursesModel } from 'api/courses/types';

export type CoursesThunkState = {
  isLoading: boolean;
  error: string | null;
};

export type CoursesState = CoursesThunkState & CoursesModel;
