import { lazy } from 'react';

export const EditCourse = lazy(
  () => import(/* webpackChunkName: "EditCoursePage" */ './edit-course')
);
