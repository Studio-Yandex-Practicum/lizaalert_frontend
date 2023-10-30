import type { RegistrationModel } from '../types';

const registrationData: RegistrationModel = {
  user: {
    username: 'userexample',
    email: 'example@mail.ru',
    id: 2,
  },
  access_token: 'exampleaccesstoken',
  refresh_token: 'examplerefreshtoken',
};

export default Promise.resolve(() => registrationData);
