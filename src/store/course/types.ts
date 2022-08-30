import { CourseType } from 'services/course/types';

export type CourseReducerType = {
  course: Partial<CourseType>;
  isLoading: boolean;
  error: string | null;
};
