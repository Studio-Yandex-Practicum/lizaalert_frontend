import { lazy } from 'react';

export const Development = lazy(
  () => import(/* webpackChunkName: "DevelopmentPage" */ './development')
);
