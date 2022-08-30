import { CoursesType } from 'services/courses/types';

export type CoursesThunkType = {
  isLoading: boolean;
  error: string | null;
};

export type CoursesReducerType = CoursesThunkType & CoursesType;
