import { STATUS_CODES } from './status-codes';

export class ForbiddenError extends Error {
  statusCode = STATUS_CODES.FORBIDDEN;

  constructor(public readonly message: string) {
    super(message);
  }
}
