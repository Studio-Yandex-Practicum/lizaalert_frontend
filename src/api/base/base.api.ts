import axios, { AxiosError, AxiosResponse } from 'axios';
import { BACKEND_API, isMockEnv } from 'config';
import { store } from 'store';
import type { BaseApiRequest } from './types';

export abstract class BaseApi {
  protected api = axios.create({
    baseURL: BACKEND_API,
  });

  constructor() {
    this.api.interceptors.request.use((config) => {
      const state = store.getState();
      const { token } = state.auth;
      if (token) {
        // eslint-disable-next-line no-param-reassign, @typescript-eslint/restrict-template-expressions
        config.headers.Authorization = `${token}`;
      }
      return config;
    });

    this.api.interceptors.response.use(
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
