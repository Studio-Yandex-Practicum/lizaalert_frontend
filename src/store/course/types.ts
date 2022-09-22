import { Course } from 'services/course/types';

export type CourseReducerType = {
  course: Course;
  isLoading: boolean;
  error: string | null;
};
