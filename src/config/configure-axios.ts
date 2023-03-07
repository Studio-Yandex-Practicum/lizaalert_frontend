import axios, { AxiosError, AxiosResponse } from 'axios';
import { BACKEND_API } from './index';

export const configureAxios = () => {
  axios.defaults.baseURL = BACKEND_API;

  axios.interceptors.response.use(
    // Типизация возвращаемого значения производится в методах
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => Promise.reject(error.message)
  );
};
