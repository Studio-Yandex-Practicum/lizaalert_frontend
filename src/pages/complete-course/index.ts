import { lazy } from 'react';

export const CompleteCourse = lazy(
  () => import(/* webpackChunkName: "CompleteCoursePage" */ './complete-course')
);
