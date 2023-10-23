import { isMockEnv } from 'config';
import type { BaseApiRequest } from '../types';

export abstract class BaseApi {
  createRequest = <T>({ mock, request }: BaseApiRequest): Promise<T> => {
    if (isMockEnv && mock) {
      return mock().then((module: { readonly default: Promise<T> }) => {
        if (typeof module.default !== 'undefined') {
          return module.default;
        }

        return module;
      });
    }

    return request();
  };
}
