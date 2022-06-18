import { ParamsType } from '../http-client.types';

/** Приводит url и объект параметров к браузерному query. Опускает значение null и undefined. */
export const stringifyQuery = (target: string, params: ParamsType): string => {
  const url = new URL(target);

  if (typeof params === 'object') {
    for (const key of Object.keys(params)) {
      const value = params[key];
      if (
        typeof value === 'number' ||
        typeof value === 'string' ||
        typeof value === 'boolean'
      ) {
        url.searchParams.set(key, value.toString());
      }

      if (Array.isArray(value)) {
        url.searchParams.set(key, JSON.stringify(value));
      }

      if (typeof value === 'object' && value?.constructor === Object) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
  }

  return url.toString();
};
