import type { RegistrationModel } from '../types';

const registrationData = new Promise<RegistrationModel>((resolve) => {
  resolve({
    user: {
      username: 'userexample',
      email: 'example@mail.ru',
      id: 2,
    },
    access_token: 'exampleaccesstoken',
    refresh_token: 'examplerefreshtoken',
  });
});

export default registrationData;
