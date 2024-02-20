import { SerializedError } from 'api/core';
import { HomeworkModel } from 'api/homework';
import { ProcessEnum } from 'utils/constants';

export type HomeworkState = {
  homework: HomeworkModel;
  process: ProcessEnum;
  error: Nullable<SerializedError>;
};
