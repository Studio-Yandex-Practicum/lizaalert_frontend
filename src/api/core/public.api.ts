import type { AxiosError, AxiosResponse } from 'axios';
import { CoreApi } from './abstract/core.api';

class PublicApi extends CoreApi {
  constructor() {
    super();
    this.api.interceptors.response.use(
      // Типизация возвращаемого значения производится в методах
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => Promise.reject(error.response?.data)
    );
  }
}

export const publicApi = new PublicApi();
