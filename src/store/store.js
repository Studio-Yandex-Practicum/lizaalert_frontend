import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/slice';
import testReducer from './test/slice';
import courseReducer from './course/slice';
import lessonReducer from './lesson/slice';
import profileReducer from './profile/slice';

const appReducer = combineReducers({
  courses: coursesReducer,
  test: testReducer,
  course: courseReducer,
  lesson: lessonReducer,
  profile: profileReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'courses/resetAllState') {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
