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

export const GENERAL_ERROR = 'Что-то пошло не так';

export enum Controls {
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
}

export enum KeyboardKeys {
  ESCAPE = 'Escape',
}

export enum CourseStatusButtons {
  'active' = 'Записаться',
  'inactive' = 'Не активный',
  'finished' = 'Пройден',
  'booked' = 'Продолжить',
}

export const ErrorMessages = {
  email: 'Введите эл. адрес в формате: anna@liza-alert.ru',
  tel: 'Введите номер телефона в формате: +7 (XXX) XXX XX XX',
  confirmPassword: 'Пароли не совпадают',
};

export const Patterns = {
  email: '[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$',
  tel: '\\+7\\s?[0-9]{10}',
  image: /\.(gif|jpg|jpeg|tiff|png)$/i,
};

export enum ProcessEnum {
  Initial = 'Initial',
  Requested = 'Requested',
  Succeeded = 'Succeeded',
  Failed = 'Failed',
}

export const SHOULD_LOAD_PROCESS_MAP: Record<ProcessEnum, boolean> = {
  [ProcessEnum.Initial]: true,
  [ProcessEnum.Requested]: false,
  [ProcessEnum.Succeeded]: false,
  [ProcessEnum.Failed]: false,
};

export const LOADING_PROCESS_MAP: Record<ProcessEnum, boolean> = {
  [ProcessEnum.Initial]: false,
  [ProcessEnum.Requested]: true,
  [ProcessEnum.Succeeded]: false,
  [ProcessEnum.Failed]: false,
};

export const AFTER_LOAD_PROCESS_MAP: Record<ProcessEnum, boolean> = {
  [ProcessEnum.Initial]: false,
  [ProcessEnum.Requested]: false,
  [ProcessEnum.Succeeded]: true,
  [ProcessEnum.Failed]: true,
};
