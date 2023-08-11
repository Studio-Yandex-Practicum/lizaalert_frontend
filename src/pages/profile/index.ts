import { lazy } from 'react';

export const Profile = lazy(
  () => import(/* webpackChunkName: "ProfilePage" */ './profile')
);
