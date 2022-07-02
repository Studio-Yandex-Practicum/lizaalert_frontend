import {
  Methods,
  Options,
  ReqOptions,
  ResponseFormat,
  XHRTyped,
} from './http-client.types';
import {
  convertToFormData,
  isContainsFile,
  isEmptyObject,
  stringifyData,
  stringifyQuery,
} from './utils';

const DEFAULT_TIMEOUT = 10000;
const DEFAULT_TRIES = 3;

interface IHTTPClient {
  get: (url: string, options: Options) => Promise<XMLHttpRequest>;
  post: (url: string, options: Options) => Promise<XMLHttpRequest>;
  put: (url: string, options: Options) => Promise<XMLHttpRequest>;
  patch: (url: string, options: Options) => Promise<XMLHttpRequest>;
  delete: (url: string, options: Options) => Promise<XMLHttpRequest>;
}

/**
 * @description Класс HTTPClient используется для составления запросов к API.
 *
 * - На вход принимает `baseURL` (http://example.com).
 * - Имеет публичные методы `get`, `post`, `patch`, `put`, `delete`. Возвращает Promise<XMLHttpRequest>, ответ лежит в свойстве `response`.
 * - Можно установить `timeout` запроса (в миллисекундах), по умолчанию 10 секунд.
 * - Самостоятельно приводит к строке объект с данными, также самостоятельно приводит к `formData`, если в объекте есть файл.
 * - Самостоятельно преобразовывает объект `params` в query.
 * - По умолчанию возвращает данные в формате `json`, его не нужно дополнительно обрабатывать.
 * */

class HTTPClient implements IHTTPClient {
  constructor(private readonly baseURL: string) {}

  private request = <T>(
    url: string,
    options: ReqOptions = { method: Methods.Get },
    timeout = DEFAULT_TIMEOUT
  ): Promise<XHRTyped<T>> => {
    const target = `${this.baseURL}${url}`;
    const {
      headers,
      method,
      data,
      params,
      responseFormat,
      includeCredentials,
    } = options;

    return new Promise<XHRTyped<T>>((resolve, reject) => {
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

      if (headers && !isEmptyObject(headers)) {
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

      if (isGet || !data || isEmptyObject(data)) {
        request.send();
        return;
      }

      if (data && isContainsFile(data)) {
        request.send(convertToFormData(data));
        return;
      }

      request.setRequestHeader('Content-Type', 'application/json');
      request.send(stringifyData(data));
    });
  };

  private retry = <T>(
    url: string,
    options: ReqOptions
  ): Promise<XHRTyped<T>> => {
    const { tries = DEFAULT_TRIES } = options;

    const onError = (err: unknown) => {
      const triesLeft = tries - 1;

      if (!triesLeft) {
        throw err;
      }

      return this.retry<T>(url, { ...options, tries: triesLeft });
    };

    return this.request<T>(url, options, options.timeout).catch(onError);
  };

  public get = async <T>(url: string, options: Options = {}) =>
    this.retry<T>(url, { ...options, method: Methods.Get });

  public post = async <T>(url: string, options: Options = {}) =>
    this.retry<T>(url, { ...options, method: Methods.Post });

  public put = async <T>(url: string, options: Options = {}) =>
    this.retry<T>(url, { ...options, method: Methods.Put });

  public patch = async <T>(url: string, options: Options = {}) =>
    this.retry<T>(url, { ...options, method: Methods.Patch });

  public delete = async <T>(url: string, options: Options = {}) =>
    this.retry<T>(url, { ...options, method: Methods.Delete });
}

export default HTTPClient;
