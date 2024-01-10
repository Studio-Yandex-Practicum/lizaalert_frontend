import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { GENERAL_ERROR, ProcessEnum } from 'utils/constants';
import type { AchievementsState } from './types';
import { fetchAchievement } from './thunk';

const initialState: AchievementsState = {
  achievements: [],
  process: ProcessEnum.Initial,
  error: null,
};

export const AchievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isPending(fetchAchievement), (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchAchievement), (state, { payload }) => {
      state.process = ProcessEnum.Succeeded;
      state.achievements = payload;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchAchievement), (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export default AchievementsSlice.reducer;
