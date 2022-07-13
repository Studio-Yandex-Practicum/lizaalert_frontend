import { STATUS_CODES } from './status-codes';

export class InternalError extends Error {
  statusCode = STATUS_CODES.INTERNAL;

  constructor(public readonly message: string) {
    super(message);
  }
}
