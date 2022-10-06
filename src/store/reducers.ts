import { Action, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { AppState } from './types';
import coursesReducer from './courses/slice';
import testReducer from './test/slice';
import courseReducer from './course/slice';
import lessonReducer from './lesson/slice';
import profileReducer from './profile/slice';
import authReducer from './auth/slice';

const appReducer = combineReducers<AppState>({
  courses: coursesReducer,
  test: testReducer,
  course: courseReducer,
  lesson: lessonReducer,
  profile: profileReducer,
  auth: authReducer,
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
