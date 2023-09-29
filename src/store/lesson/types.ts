import type { LessonModel } from 'api/course';
import { ProcessEnum } from 'utils/constants';

export type LessonState = {
  lesson: LessonModel;
  process: ProcessEnum;
  error: string | null;
};
