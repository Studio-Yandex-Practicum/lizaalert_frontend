import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './courses/slice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
