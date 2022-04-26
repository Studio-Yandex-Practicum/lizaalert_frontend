import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/slice';
import courseReducer from './course/slice';
import lessonReducer from './lesson/slice';
import profileReducer from './profile/slice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    course: courseReducer,
    lesson: lessonReducer,
    profile: profileReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
