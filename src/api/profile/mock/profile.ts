import { ProfileModel } from '../types';

const profile = new Promise<ProfileModel>((resolve) => {
  resolve({
    id: 0,
    photo: '../../assets/images/profile.jpg',
    full_name: 'Иванова Анна Сидоровна',
    // userStatus: 'Профессионал',
    department: 'Картограф',
    count_pass_course: '2',
    birth_date: '1990-01-01',
    location: 'г. Санкт-Петербург',
    call_sign: 'Белка',
    phone_number: '+71234567890',
    email: 'anna@liza-alert.ru',
  });
});

export default profile;
