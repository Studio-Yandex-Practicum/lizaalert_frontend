import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/slice';
import testReducer from './test/slice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    test: testReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
