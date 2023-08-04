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

/**
 * Кнопка статуса курса, содержит четыре состояния:
 * - Активная кнопка "Записаться" - для курсов, на которые открыта запись, позволяет пользователю записаться на курс;
 * - Неактивная кнопка "Записаться" - для курсов, на которые запись пока закрыта;
 * - Неактивная кнопка "Пройден" - для курсов, которые пользователь уже прошел;
 * - Активная кнопка "Продолжить" - для курсов, на которые пользователь уже записан, перенаправляет пользователя на текущий урок.
 */

export enum CourseStatusButtons {
  'active' = 'Записаться',
  'inactive' = 'Записаться',
  'finished' = 'Пройден',
  'booked' = 'Продолжить',
}

export const ErrorMessages = {
  email: 'Введите эл. адрес в формате: anna@liza-alert.ru',
  tel: 'Введите номер телефона в формате: +7 (XXX) XXX XX XX',
};

export const Patterns = {
  email: '[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$',
  tel: '\\+7\\s?[0-9]{10}',
  image: /\.(gif|jpg|jpeg|tiff|png)$/i,
};
