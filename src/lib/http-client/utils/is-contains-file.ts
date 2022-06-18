import { DataType } from '../http-client.types';

/** Проверяет объект на наличие объекта File в значениях, возвращает true или false */
export const isContainsFile = (data: DataType): boolean => {
  if (typeof data !== 'object') {
    return false;
  }

  for (const key of Object.keys(data)) {
    const value = data[key];
    if (typeof value === 'object' && value?.constructor === File) {
      return true;
    }
  }

  return false;
};
