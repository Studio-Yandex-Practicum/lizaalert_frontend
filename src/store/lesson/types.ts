import { SerializedError } from 'api/core';
import type { LessonModel } from 'api/lessons';
import { ProcessEnum } from 'utils/constants';

export type LessonState = {
  lesson: LessonModel;
  process: ProcessEnum;
  error: Nullable<SerializedError>;
  completeLessonProcess: ProcessEnum;
  completeLessonError: Nullable<SerializedError>;
};
