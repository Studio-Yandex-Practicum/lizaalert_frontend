import { isAdmin } from './index';

const importBuildTarget = () => {
  if (isAdmin) {
    return import('../components/app/app-admin');
  }
  return import('../components/app/app');
};

export default importBuildTarget;
