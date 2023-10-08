import { ProfileModel } from '../types';

const profile = new Promise<ProfileModel>((resolve) => {
  resolve({
    id: 0,
    accountOverview: {
      avatar: '../../assets/images/profile.jpg',
      userName: 'Иванова Анна Сидоровна',
      userStatus: 'Профессионал',
      userOccupation: 'Картограф',
      coursesFinished: 2,
    },
    personalData: {
      name: 'Иванова Анна Сидоровна',
      dateOfBirth: '1990-01-01',
      region: 'г. Санкт-Петербург',
      nickname: 'Белка',
      avatar: '',
    },
    accountData: {
      phoneNumber: '+71234567890',
      email: 'anna@liza-alert.ru',
      password: 'password',
    },
  });
});

export default profile;
