import { STATUS_CODES } from './status-codes';

export class UnauthorizedError extends Error {
  statusCode = STATUS_CODES.UNAUTHORIZED;

  constructor(public readonly message: string) {
    super(message);
  }
}
