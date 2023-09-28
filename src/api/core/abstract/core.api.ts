import axios, { AxiosRequestConfig } from 'axios';
import { BACKEND_API } from 'config';
import type {
  ApiInterceptorConfig,
  RequestType,
  RequestTypeWithData,
} from '../types';

export abstract class CoreApi {
  protected api = axios.create({
    baseURL: BACKEND_API,
  });

  private interceptorsMap: { [p: string]: number } = {};

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
