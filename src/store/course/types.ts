import type { CourseModel } from 'api/course';

export type CourseState = {
  course: CourseModel;
  isLoading: boolean;
  error: string | null;
};
