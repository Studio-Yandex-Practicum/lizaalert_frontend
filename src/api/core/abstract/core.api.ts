import axios, {
  type AxiosError,
  AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import { BACKEND_API } from 'config';
import { HttpStatusCodes, httpStatusCodesMap } from '../constants';
import { SerializedError } from '../serialized-error';
import {
  ApiInterceptorConfig,
  ErrorResponseDataModel,
  RequestType,
  RequestTypeWithData,
} from '../types';

export abstract class CoreApi {
  protected api = axios.create({
    baseURL: BACKEND_API,
  });

  private interceptorsMap: { [p: string]: number } = {};

  constructor() {
    this.api.interceptors.response.use(
      // Типизация возвращаемого значения производится в методах
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      (response: AxiosResponse) => response.data,
      (error: AxiosError<ErrorResponseDataModel>) => {
        const { response, code } = error;
        const statusCode = response?.status;

        if (statusCode === HttpStatusCodes.Unauthorized) {
          return Promise.reject(error);
        }

        return Promise.reject(
          new SerializedError({
            ...(statusCode && { code: httpStatusCodesMap[statusCode] ?? code }),
            message: response?.data.detail,
          })
        );
      }
    );
  }

  get: RequestType = (...req) => this.api.get(...req);

  post: RequestTypeWithData = (...req) => this.api.post(...req);

  patch: RequestTypeWithData = (...req) => this.api.patch(...req);

  put: RequestTypeWithData = (...req) => this.api.put(...req);

  delete: RequestType = (...req) => this.api.delete(...req);

  request = <D>(config: AxiosRequestConfig<D>): Promise<D> =>
    this.api.request(config);

  addInterceptor = ({
    type,
    name,
    onRejected,
    onFulfilled,
  }: ApiInterceptorConfig) => {
    const id = this.interceptorsMap[name];

    if (id) {
      this.removeInterceptor({ type, name, id });
    }

    this.interceptorsMap[name] =
      type === 'request'
        ? this.api.interceptors.request.use(onFulfilled, onRejected)
        : this.api.interceptors.response.use(onFulfilled, onRejected);
  };

  removeInterceptor = ({
    type,
    id,
    name,
  }: Pick<ApiInterceptorConfig, 'type' | 'name'> & {
    id?: number;
  }) => {
    const interceptorId = id ?? this.interceptorsMap[name];

    if (interceptorId) {
      this.api.interceptors[type].eject(interceptorId);
      delete this.interceptorsMap[name];
    }
  };
}
