import { UserProgressStatus } from 'api/course';

export const SPINNER_DELAY = 300;
export const DELAY_DEBOUNCE = 300;

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const GENERAL_ERROR = 'Что-то пошло не так';
export const ERROR_403 = 'Ошибка 403';

export const ACCESS_TOKEN = 'token.access';
export const REFRESH_TOKEN = 'token.refresh';

export enum Controls {
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
}

export enum KeyboardKeys {
  ESCAPE = 'Escape',
}

export const CourseStatusButtons: Record<UserProgressStatus, string> = {
  [UserProgressStatus.NotEnrolled]: 'Записаться',
  [UserProgressStatus.Enrolled]: 'Скоро начнется',
  [UserProgressStatus.Available]: 'Начать учиться',
  [UserProgressStatus.InProgress]: 'Продолжить',
  [UserProgressStatus.Completed]: 'Пройти еще раз',
};

export const ErrorMessages = {
  email: 'Введите эл. адрес в формате: anna@liza-alert.ru',
  tel: 'Введите номер телефона в формате: +7 (XXX) XXX XX XX',
  confirmPassword: 'Пароли не совпадают',
};

export const SERVER_API_ERRORS = {
  FORBIDDEN: 'У вас недостаточно прав для выполнения данного действия.',
};

export const RegExpPatterns = {
  email: '[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$',
  phone: /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/,
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
  [ProcessEnum.Failed]: true,
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

export const PHONE_MASK = '+7 (999) 999-99-99';

export enum UserDataFieldNames {
  Name = 'name',
  DateOfBirth = 'dateOfBirth',
  Region = 'region',
  Nickname = 'nickname',
  Avatar = 'avatar',
  Email = 'email',
  Phone = 'phone',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}
