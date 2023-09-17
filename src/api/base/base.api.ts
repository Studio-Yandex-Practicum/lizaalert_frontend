import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';
import { BACKEND_API, isMockEnv } from 'config';
import type { BaseApiRequest } from './types';

// временное решение передачи токена. суть исправления именно в передаче токена в headers базовой апи
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0ODE2ODM4LCJpYXQiOjE2OTQ3NzM2MzgsImp0aSI6ImVjNDc4YzQyY2RkZTQ5ZDc5YzBhZjI1YjVkNjhiOWZkIiwidXNlcl9pZCI6NTZ9.9L_WHrI5fJNBxUqvEyNlDFpyAdssAujYymA-FCtGyXs';

export abstract class BaseApi {
  protected api = axios.create({
    baseURL: BACKEND_API,
    headers: {
      Authorization: `${token}`,
    },
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
