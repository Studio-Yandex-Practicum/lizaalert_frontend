import type { CourseModel } from 'api/course';
import { SerializedError } from 'api/core';
import { ProcessEnum } from 'utils/constants';

export type CourseState = {
  course: CourseModel;
  process: ProcessEnum;
  error: Nullable<SerializedError>;
};
