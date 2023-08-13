import { lazy } from 'react';

export const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFoundPage" */ './not-found')
);
