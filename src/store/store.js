import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/slice';
import courseReducer from './course/slice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    course: courseReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
