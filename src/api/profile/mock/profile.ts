import profileMockImage from 'assets/images/profile-mock.jpg';
import type { ProfileModel } from '../types';

const profile: ProfileModel = {
  id: 0,
  photo: profileMockImage,
  full_name: 'Иванова Анна Сидоровна',
  department: 'Профессионал',
  call_sign: 'Картограф',
  count_pass_course: 2,
  birth_date: '1990-01-01',
  location: 'г. Санкт-Петербург',
  phone_number: '+7 (123) 456-78-90',
  email: 'anna@liza-alert.ru',
};

export default Promise.resolve(() => profile);
