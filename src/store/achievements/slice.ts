import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { ProcessEnum } from 'utils/constants';
import type { AchievementsState } from './types';
import { fetchAchievements } from './thunk';

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
    builder.addMatcher(isPending(fetchAchievements), (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchAchievements), (state, { payload }) => {
      state.process = ProcessEnum.Succeeded;
      state.achievements = payload;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchAchievements), (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error;
    });
  },
});

export default AchievementsSlice.reducer;
