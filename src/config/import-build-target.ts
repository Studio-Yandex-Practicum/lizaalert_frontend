import { isAdmin } from './index';

export const importBuildTarget = () => {
  if (isAdmin) {
    return import('../components/app/app-admin');
  }
  return import('../components/app/app');
};
