import type { AuthorizationModel } from '../types';

const authorizationData = new Promise<AuthorizationModel>((resolve) => {
  resolve({
    email: 'example@mail.ru',
    password: 'Qwerty123',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'example_jwt_token',
    },
  });
});

export default authorizationData;
