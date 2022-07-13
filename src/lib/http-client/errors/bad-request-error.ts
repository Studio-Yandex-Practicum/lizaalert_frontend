import { STATUS_CODES } from './status-codes';

export class BadRequestError extends Error {
  statusCode = STATUS_CODES.BAD_REQUEST;

  constructor(public readonly message: string) {
    super(message);
  }
}
