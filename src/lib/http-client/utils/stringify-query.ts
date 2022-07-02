import { ParamsType } from '../http-client.types';
import { isEmptyObject } from './is-empty-object';

/** Приводит url и объект параметров к браузерному query. Опускает значение null и undefined. */
export const stringifyQuery = (target: string, params: ParamsType): string => {
  if (isEmptyObject(params)) {
    return target;
  }

  const url = new URL(target);

  if (typeof params === 'object') {
    const keys = Object.keys(params);
    const keysLength = keys.length;

    for (let i = 0; i < keysLength; i += 1) {
      const value = params[keys[i]];
      if (
        typeof value === 'number' ||
        typeof value === 'string' ||
        typeof value === 'boolean'
      ) {
        url.searchParams.set(keys[i], value.toString());
      }

      if (Array.isArray(value)) {
        url.searchParams.set(keys[i], JSON.stringify(value));
      }

      if (typeof value === 'object' && value?.constructor === Object) {
        url.searchParams.set(keys[i], JSON.stringify(value));
      }
    }
  }

  return url.toString();
};
