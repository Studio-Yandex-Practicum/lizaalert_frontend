import {
  Methods,
  Options,
  ReqOptions,
  ResponseFormat,
} from './http-client.types';
import {
  convertToFormData,
  isContainsFile,
  stringifyData,
  stringifyQuery,
} from './utils';

interface IHTTPClient {
  get: (url: string, options: Options) => Promise<XMLHttpRequest>;
  post: (url: string, options: Options) => Promise<XMLHttpRequest>;
  put: (url: string, options: Options) => Promise<XMLHttpRequest>;
  patch: (url: string, options: Options) => Promise<XMLHttpRequest>;
  delete: (url: string, options: Options) => Promise<XMLHttpRequest>;
}

/**
 * Класс HTTPClient используется для составления запросов к API.
 * На вход принимает baseURL (http://example.com).
 * Имеет публичные методы `get`, `post`, `patch`, `put`, `delete`.
 * Самостоятельно приводит к строке объект с данными, также самостоятельно приводит к `formData`, если в объекте есть файл.
 * По умолчанию возвращает данные в формате `json`, его не нужно дополнительно обрабатывать.
 * */

class HTTPClient implements IHTTPClient {
  constructor(private readonly baseURL: string) {}

  private request = (
    url: string,
    options: ReqOptions = { method: Methods.Get },
    timeout = 10000
  ): Promise<XMLHttpRequest> => {
    const target = `${this.baseURL}${url}`;
    const {
      headers,
      method,
      data,
      params,
      responseFormat,
      includeCredentials,
    } = options;

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      if (!method) {
        reject(new Error('No method was specified.'));
        return;
      }

      const request = new XMLHttpRequest();
      const isGet = method === Methods.Get;

      request.open(
        method,
        isGet && params ? stringifyQuery(target, params) : target,
        true
      );

      if (headers) {
        Object.keys(headers).forEach((key) =>
          request.setRequestHeader(key, headers[key])
        );
      }

      const handleError = () => reject(request);

      request.onload = () => resolve(request);
      request.onabort = handleError;
      request.onerror = handleError;
      request.timeout = timeout;
      request.ontimeout = handleError;
      request.responseType = responseFormat ?? ResponseFormat.Json;

      if (includeCredentials) {
        request.withCredentials = true;
      }

      if (isGet || !data) {
        request.send();
        return;
      }

      if (data && isContainsFile(data)) {
        request.setRequestHeader('Content-Type', 'multipart/form-data');
        request.send(convertToFormData(data));
        return;
      }

      request.setRequestHeader('Content-Type', 'application/json');
      request.send(stringifyData(data));
    });
  };

  public get = async (url: string, options: Options = {}) =>
    this.request(url, { ...options, method: Methods.Get }, options.timeout);

  public post = async (url: string, options: Options = {}) =>
    this.request(url, { ...options, method: Methods.Post }, options.timeout);

  public put = async (url: string, options: Options = {}) =>
    this.request(url, { ...options, method: Methods.Put }, options.timeout);

  public patch = async (url: string, options: Options = {}) =>
    this.request(url, { ...options, method: Methods.Patch }, options.timeout);

  public delete = async (url: string, options: Options = {}) =>
    this.request(url, { ...options, method: Methods.Delete }, options.timeout);
}

export default HTTPClient;
