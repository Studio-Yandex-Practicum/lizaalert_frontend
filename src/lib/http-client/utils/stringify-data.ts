import { DataType } from '../http-client.types';

/** Конвертирует объект с данными в строку */
export const stringifyData = (data: DataType): string => {
  if (typeof data !== 'object') {
    return '';
  }

  if (!Object.keys(data).length) {
    return '';
  }

  return JSON.stringify(data);
};
