export enum HttpStatusCodes {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Internal = 500,
}

export enum ErrorCodes {
  BadRequest = 'BAD_REQUEST',
  Unauthorized = 'UNAUTHORIZED',
  Forbidden = 'FORBIDDEN',
  NotFound = 'NOT_FOUND',
  Internal = 'INTERNAL',
}

export const httpStatusCodesMap: Record<HttpStatusCodes | number, ErrorCodes> =
  {
    [HttpStatusCodes.BadRequest]: ErrorCodes.BadRequest,
    [HttpStatusCodes.Unauthorized]: ErrorCodes.Unauthorized,
    [HttpStatusCodes.Forbidden]: ErrorCodes.Forbidden,
    [HttpStatusCodes.NotFound]: ErrorCodes.NotFound,
    [HttpStatusCodes.Internal]: ErrorCodes.Internal,
  };
