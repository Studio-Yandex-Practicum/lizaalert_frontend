export const Filters = {
  CATEGORY: 'category',
  THEME: 'theme',
  LEVEL: 'level',
  STATUS: 'status',
};

export const Statuses = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  FINISHED: 'finished',
  BOOKED: 'booked',
};

export const Levels = {
  NEW: 'novice',
  EXPERIENCED: 'experienced',
  PRO: 'professional',
};

export const ANIMATION_DURATION = 300;

export const SPINNER_DELAY = 300;

export const CHECKBOX = 'checkbox';
export const RADIO = 'radio';

export const errorMessages = {
  email: 'Введите эл. адрес в формате: anna@liza-alert.ru',
  tel: 'Введите номер телефона в формате: +7 (XXX) XXX XX XX',
};

export const patterns = {
  email: '[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$',
  tel: '\\+7\\s?[0-9]{10}',
};
