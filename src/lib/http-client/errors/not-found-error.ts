import { STATUS_CODES } from './status-codes';

export class NotFoundError extends Error {
  statusCode = STATUS_CODES.NOT_FOUND;

  constructor(public readonly message: string) {
    super(message);
  }
}
