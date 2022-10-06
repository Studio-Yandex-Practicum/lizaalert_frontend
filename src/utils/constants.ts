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

export const SPINNER_DELAY = 300;

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const Controls = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
};

export const ErrorMessages = {
  email: 'Введите эл. адрес в формате: anna@liza-alert.ru',
  tel: 'Введите номер телефона в формате: +7 (XXX) XXX XX XX',
};

export const Patterns = {
  email: '[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$',
  tel: '\\+7\\s?[0-9]{10}',
  image: /\.(gif|jpg|jpeg|tiff|png)$/i,
};
