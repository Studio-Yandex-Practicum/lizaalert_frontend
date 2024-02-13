export enum HttpStatusCodes {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Internal = 500,
}

export enum HttpCodes {
  BadRequest = 'BAD_REQUEST',
  Unauthorized = 'UNAUTHORIZED',
  Forbidden = 'FORBIDDEN',
  NotFound = 'NOT_FOUND',
  Internal = 'INTERNAL',
}

export const httpStatusCodesMap: Record<HttpStatusCodes | number, HttpCodes> = {
  [HttpStatusCodes.BadRequest]: HttpCodes.BadRequest,
  [HttpStatusCodes.Unauthorized]: HttpCodes.Unauthorized,
  [HttpStatusCodes.Forbidden]: HttpCodes.Forbidden,
  [HttpStatusCodes.NotFound]: HttpCodes.NotFound,
  [HttpStatusCodes.Internal]: HttpCodes.Internal,
};
