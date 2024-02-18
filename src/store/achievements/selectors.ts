import type { AppState } from '../types';

export const selectAchievements = (state: AppState) =>
  state.achievements.achievements;
export const selectAchievementsProcess = (state: AppState) =>
  state.achievements.process;
export const selectAchievementsError = (state: AppState) =>
  state.achievements.error;
