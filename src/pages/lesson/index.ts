import { lazy } from 'react';

export const Lesson = lazy(
  () => import(/* webpackChunkName: "LessonPage" */ './lesson')
);
