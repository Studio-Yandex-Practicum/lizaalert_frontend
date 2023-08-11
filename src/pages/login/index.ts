import { lazy } from 'react';

export const Login = lazy(
  () => import(/* webpackChunkName: "LoginPage" */ './login')
);
