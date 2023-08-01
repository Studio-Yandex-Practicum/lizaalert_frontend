import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';
import { BACKEND_API, isMockEnv } from 'config';
import type { BaseApiRequest } from './types';

export abstract class BaseApi {
  protected api = axios.create({
    baseURL: BACKEND_API,
  });

  constructor() {
    this.api.interceptors.response.use(
      // Типизация возвращаемого значения производится в методах
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => Promise.reject(error.message)
    );
  }

  protected createRequest = <T>({
    mock,
    request,
  }: BaseApiRequest): Promise<T> => {
    if (isMockEnv && mock) {
      return mock().then(
        (module: { readonly default: Promise<T> }) => module.default
      );
    }
    return request();
  };
}
