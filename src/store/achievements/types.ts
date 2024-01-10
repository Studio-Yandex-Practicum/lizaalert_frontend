import type { AchievementsModel } from 'api/achievements/types';
import { ProcessEnum } from 'utils/constants';

export type AchievementsState = {
  achievements: AchievementsModel;
  process: ProcessEnum;
  error: string | null;
};
