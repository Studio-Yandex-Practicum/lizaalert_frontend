import { ERROR_403 } from 'utils/constants';
import type { ErrorLockerProps } from './types';

export const forbiddenErrorPropsConfig: ErrorLockerProps = {
  heading: ERROR_403,
  subheading: 'Доступ запрещен',
  content: 'У вас нет прав доступа к этой странице',
  buttonText: 'Назад',
};
