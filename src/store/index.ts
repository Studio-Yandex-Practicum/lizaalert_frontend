import {
  Action,
  CombinedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { isDevEnv } from 'config';
import coursesReducer from './courses/slice';
import testReducer from './test/slice';
import courseReducer from './course/slice';
import lessonReducer from './lesson/slice';
import profileReducer from './profile/slice';
import authReducer from './auth/slice';
import { AppState } from './types';

const appReducer = combineReducers<AppState>({
  courses: coursesReducer,
  test: testReducer,
  course: courseReducer,
  lesson: lessonReducer,
  profile: profileReducer,
  auth: authReducer,
});

const rootReducer = (
  state: CombinedState<AppState> | undefined,
  action: Action
) => {
  if (action.type === 'courses/resetAllState') {
    // Возврат стора к дефолтному состоянию
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: isDevEnv,
});

export type AppDispatch = typeof store.dispatch;

/** Типизированный хук диспетчера, использовать его в компонентах */
export const useAppDispatch: () => AppDispatch = useDispatch;

/** Типизированный хук селектора, использовать его в компонентах */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
