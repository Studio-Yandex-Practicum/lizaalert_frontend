import type { LessonModel } from 'api/lessons';
import { ProcessEnum } from 'utils/constants';

export type LessonState = {
  lesson: LessonModel;
  process: ProcessEnum;
  error: string | null;
};
