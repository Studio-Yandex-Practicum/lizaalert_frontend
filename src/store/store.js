import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/slice';
import testReducer from './test/slice';
import courseReducer from './course/slice';
import lessonReducer from './lesson/slice';
import profileReducer from './profile/slice';
import userReducer from './user/slice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    test: testReducer,
    course: courseReducer,
    lesson: lessonReducer,
    profile: profileReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
