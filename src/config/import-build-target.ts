import { isAdmin } from './index';

export const importBuildTarget = () => {
  if (isAdmin) {
    return import(/* webpackChunkName: "appAdmin" */ '../app/app-admin');
  }
  return import(/* webpackChunkName: "app" */ '../app/app');
};
