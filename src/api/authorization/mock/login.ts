import type { AuthorizationModel } from '../types';

const loginData = new Promise<AuthorizationModel>((resolve) => {
  resolve({
    refresh: 'exampleTokenRefresh',
    access: 'exampleTokenAccessey',
  });
});

export default loginData;
