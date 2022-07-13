import { STATUS_CODES } from './errors/status-codes';
import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  InternalError,
  NotFoundError,
  UnauthorizedError,
} from './errors';
import { XHRTyped } from './http-client.types';

export const ErrorTypes: Record<string, typeof ConflictError> = {
  [STATUS_CODES.CONFLICT]: ConflictError,
  [STATUS_CODES.BAD_REQUEST]: BadRequestError,
  [STATUS_CODES.INTERNAL]: InternalError,
  [STATUS_CODES.FORBIDDEN]: ForbiddenError,
  [STATUS_CODES.NOT_FOUND]: NotFoundError,
  [STATUS_CODES.UNAUTHORIZED]: UnauthorizedError,
};

export const checkResponseStatus = <T>(
  xhr: XHRTyped<T>
): XHRTyped<T> | Promise<never> => {
  const { status, response } = xhr;
  if (status !== 0 && status < 400) {
    return xhr;
  }

  // Скорее всего будет приходить объект с полем message
  const error = ErrorTypes[status]
    ? new ErrorTypes[status](response.message)
    : new ErrorTypes[STATUS_CODES.INTERNAL](response.message);

  return Promise.reject(error);
};
