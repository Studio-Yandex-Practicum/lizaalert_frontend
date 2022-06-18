export enum Methods {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export enum ResponseFormat {
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
};

export type Options = Omit<ReqOptions, 'method'>;
