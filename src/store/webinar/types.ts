import { SerializedError } from 'api/core';
import type { WebinarModel } from 'api/lessons';
import { ProcessEnum } from 'utils/constants';

export type WebinarState = {
  webinar: WebinarModel;
  process: ProcessEnum;
  error: Nullable<SerializedError>;
};
