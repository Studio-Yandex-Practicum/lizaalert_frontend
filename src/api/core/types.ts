import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export type BaseApiRequest = {
  // используем any, т.к. lazy импорт нормально не типизируется
  mock?: () => Promise<any>;
  request: () => Promise<never>;
};

export type RequestType = <D, R>(
  url: string,
  config?: AxiosRequestConfig<D>
) => Promise<R>;

export type RequestTypeWithData = <D, R>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) => Promise<R>;

export type RequestApiInterceptor = {
  type: 'request';
  onFulfilled: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
};

export type ResponseApiInterceptor = {
  type: 'response';
  onFulfilled: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
};

export type ApiInterceptorConfig = (
  | RequestApiInterceptor
  | ResponseApiInterceptor
) & {
  type: 'request' | 'response';
  name: string;
  onRejected?: (error: AxiosError) => unknown;
};

export type SerializedErrorType = {
  code?: string;
  message?: string;
};

export type ErrorResponseDataModel = {
  detail: string;
};
