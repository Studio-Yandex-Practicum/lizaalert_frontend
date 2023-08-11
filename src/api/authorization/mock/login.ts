import type { AuthorizationModel } from '../types';

const loginData = new Promise<AuthorizationModel>((resolve) => {
  resolve({
    refresh: 'exampleTokenRefreshJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY',
    access: 'exampleTokenAccesseyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    id: 99999999999999,
  });
});

export default loginData;
