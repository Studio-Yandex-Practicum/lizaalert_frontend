import { isAdmin } from './index';

export const importBuildTarget = () => {
  if (isAdmin) {
    return import('../app/app-admin');
  }
  return import('../app/app');
};
