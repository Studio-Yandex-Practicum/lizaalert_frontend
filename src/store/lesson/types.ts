import { SerializedError } from 'api/core';
import type { LessonModel } from 'api/lessons';
import { ProcessEnum } from 'utils/constants';

export type LessonState = {
  lesson: LessonModel;
  process: ProcessEnum;
  error: SerializedError | null;
  completeLessonProcess: ProcessEnum;
  completeLessonError: SerializedError | null;
};
