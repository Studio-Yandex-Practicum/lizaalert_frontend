import type { AuthorizationModel } from '../types';

const loginData: AuthorizationModel = {
  refresh: 'exampleTokenRefresh',
  access: 'exampleTokenAccessey',
};

export default Promise.resolve(() => loginData);
