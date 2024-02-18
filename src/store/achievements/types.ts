import type { AchievementsModel } from 'api/achievements/types';
import { SerializedError } from 'api/core';
import { ProcessEnum } from 'utils/constants';

export type AchievementsState = {
  achievements: AchievementsModel;
  process: ProcessEnum;
  error: Nullable<SerializedError>;
};
