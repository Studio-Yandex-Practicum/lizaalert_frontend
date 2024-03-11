import { Action, CombinedState, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import courseReducer from './course/slice';
import coursesFiltersReducer from './courses-filters/slice';
import coursesReducer from './courses/slice';
import lessonReducer from './lesson/slice';
import webinarReducer from './webinar/slice';
import profileReducer from './profile/slice';
import testReducer from './test/slice';
import achievementsReducer from './achievements/slice';
import type { AppState } from './types';

const appReducer = combineReducers<AppState>({
  courses: coursesReducer,
  coursesFilters: coursesFiltersReducer,
  test: testReducer,
  course: courseReducer,
  lesson: lessonReducer,
  webinar: webinarReducer,
  profile: profileReducer,
  auth: authReducer,
  achievements: achievementsReducer,
});

export const rootReducer = (
  state: CombinedState<AppState> | undefined,
  action: Action
) => {
  if (action.type === 'courses/resetAllState') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
