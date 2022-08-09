import axios, { AxiosResponse } from 'axios';
import { BACKEND_ORIGIN } from './index';

export const configureAxios = () => {
  axios.defaults.baseURL = BACKEND_ORIGIN;

  // Типизация возвращаемого значения производится в методах
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  axios.interceptors.response.use((response: AxiosResponse) => response.data);
};
