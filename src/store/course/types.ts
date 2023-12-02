import type { CourseModel } from 'api/course';
import { ProcessEnum } from 'utils/constants';

export type CourseState = {
  course: CourseModel;
  process: ProcessEnum;
  error: string | null;
};
