import { lazy } from 'react';

export const Courses = lazy(
  () => import(/* webpackChunkName: "CoursesPage" */ './courses')
);
