import { DataType } from '../http-client.types';

/** Проверяет объект на наличие объекта File в значениях, возвращает true или false */
export const isContainsFile = (data: DataType): boolean => {
  if (typeof data !== 'object') {
    return false;
  }

  const keys = Object.keys(data);
  const keysLength = Object.keys(data).length;

  for (let i = 0; i < keysLength; i += 1) {
    const value = data[keys[i]];
    if (typeof value === 'object' && value?.constructor === File) {
      return true;
    }
  }

  return false;
};
