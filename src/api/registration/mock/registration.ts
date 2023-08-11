import type { RegistrationModel } from '../types';

const registrationData = new Promise<RegistrationModel>((resolve) => {
  resolve({
    username: 'userexample',
    email: 'example@mail.ru',
    password: 'Qwerty123',
    re_password: 'Qwerty123',
    id: 99999999999999,
  });
});

export default registrationData;
