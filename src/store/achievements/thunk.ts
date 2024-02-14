import { createAsyncThunk } from '@reduxjs/toolkit';
import { achievementApi } from 'api/achievements';

export const fetchAchievement = createAsyncThunk(
  'achievements/fetch',
  async () => {
    const achievements = await achievementApi.getAchievements();
    return achievements;
  }
);
