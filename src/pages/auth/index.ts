import { lazy } from 'react';

export const Auth = lazy(
  () => import(/* webpackChunkName: "CoursesPage" */ './auth')
);

export type { JwtTokenData } from './types';
