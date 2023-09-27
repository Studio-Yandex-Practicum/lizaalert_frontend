import { lazy } from 'react';

export const Register = lazy(
  () => import(/* webpackChunkName: "RegisterPage" */ './register')
);
