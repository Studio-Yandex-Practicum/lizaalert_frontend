import { AxiosError } from 'axios';
import { CoursesType } from 'services/courses/types';

export type CoursesThunkType = {
  isLoading: boolean;
  error: AxiosError | null;
};

export type CoursesReducerType = CoursesThunkType & CoursesType;
