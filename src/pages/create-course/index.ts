import { lazy } from 'react';

export const CreateCourse = lazy(
  () => import(/* webpackChunkName: "CreateCoursePage" */ './create-course')
);
