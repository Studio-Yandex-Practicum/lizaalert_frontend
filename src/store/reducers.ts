import { Action, CombinedState, combineReducers } from '@reduxjs/toolkit';
import type { AppState } from './types';
import coursesReducer from './courses/slice';
import coursesFiltersReducer from './courses-filters/slice';
import testReducer from './test/slice';
import courseReducer from './course/slice';
import lessonReducer from './lesson/slice';
import profileReducer from './profile/slice';
import authReducer from './auth/slice';
import achievementsReducer from './achievements/slice';

const appReducer = combineReducers<AppState>({
  courses: coursesReducer,
  coursesFilters: coursesFiltersReducer,
  test: testReducer,
  course: courseReducer,
  lesson: lessonReducer,
  profile: profileReducer,
  auth: authReducer,
  achievements: achievementsReducer,
});

export const rootReducer = (
  state: CombinedState<AppState> | undefined,
  action: Action
) => {
  if (action.type === 'courses/resetAllState') {
    // Возврат стора к дефолтному состоянию
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
