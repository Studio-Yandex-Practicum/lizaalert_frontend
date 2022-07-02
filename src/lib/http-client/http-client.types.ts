export const enum Methods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export const enum ResponseFormat {
  Json = 'json',
}

export type DataType = Record<string, unknown>;
export type ParamsType = Record<string, unknown>;
export type HeadersType = Record<string, string>;

export type ReqOptions = {
  method: Methods;
  timeout?: number;
  data?: DataType;
  params?: ParamsType;
  headers?: HeadersType;
  includeCredentials?: boolean;
  responseFormat?: ResponseFormat;
  tries?: number;
};

export type Options = Omit<ReqOptions, 'method'>;

export interface XHRTyped<T> extends XMLHttpRequest {
  readonly response: T;
}
