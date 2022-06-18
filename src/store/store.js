import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/slice';
import testReducer from './test/slice';
import courseReducer from './course/slice';
import lessonReducer from './lesson/slice';
import profileReducer from './profile/slice';
import authReducer from './auth/slice';

const appReducer = combineReducers({
  courses: coursesReducer,
  test: testReducer,
  course: courseReducer,
  lesson: lessonReducer,
  profile: profileReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'courses/resetAllState') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
