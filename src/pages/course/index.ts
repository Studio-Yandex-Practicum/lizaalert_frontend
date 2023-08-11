import { lazy } from 'react';

export const Course = lazy(
  () => import(/* webpackChunkName: "CoursePage" */ './course')
);
