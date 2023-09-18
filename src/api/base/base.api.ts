// import type { AxiosError, AxiosResponse } from 'axios';
// import axios from 'axios';
// import { BACKEND_API, isMockEnv } from 'config';
// import { useAppSelector } from 'store';
// import { selectToken } from 'store/auth/selectors';
// import type { BaseApiRequest } from './types';

// // вызов токена из селектора не работает
// const token = useAppSelector(selectToken);

// export abstract class BaseApi {
//   protected api = axios.create({
//     baseURL: BACKEND_API,
//     headers: {
//       // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//       Authorization: `${token}`,
//     },
//   });

//   constructor() {
//     this.api.interceptors.response.use(
//       // Типизация возвращаемого значения производится в методах
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//       (response: AxiosResponse) => response.data,
//       (error: AxiosError) => Promise.reject(error.message)
//     );
//   }

//   protected createRequest = <T>({
//     mock,
//     request,
//   }: BaseApiRequest): Promise<T> => {
//     if (isMockEnv && mock) {
//       return mock().then(
//         (module: { readonly default: Promise<T> }) => module.default
//       );
//     }
//     return request();
//   };
// }

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
      // Получаем token из Redux Store
      const state = store.getState();
      console.log('state', state);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { token } = state.auth; // Предположим, что токен находится в auth.slice
      console.log('token якобы из стора', token);
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
