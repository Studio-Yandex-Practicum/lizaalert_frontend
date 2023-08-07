import type { RegistrationModel } from '../types';

const registrationData = new Promise<RegistrationModel>((resolve) => {
  resolve({
    username: 'userexample',
    email: 'example@mail.ru',
    password: 'Qwerty123',
    re_password: 'Qwerty123',
    // headers: {
    //   'Content-Type': 'application/json;charset=utf-8',
    // },
  });
});

export default registrationData;
