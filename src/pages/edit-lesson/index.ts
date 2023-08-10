import { lazy } from 'react';

export const EditLesson = lazy(
  () => import(/* webpackChunkName: "EditLessonPage" */ './edit-lesson')
);
