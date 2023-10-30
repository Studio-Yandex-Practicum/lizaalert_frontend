import { isMockEnv } from 'config';
import type { BaseApiRequest } from '../types';

export abstract class BaseApi {
  createRequest = <T>({ mock, request }: BaseApiRequest): Promise<T> => {
    if (isMockEnv && mock) {
      return mock()
        .then(
          (module: { readonly default: Promise<() => T> }) => module.default
        )
        .then((fn) => fn());
    }

    return request();
  };
}
