import { STATUS_CODES } from './status-codes';

export class ConflictError extends Error {
  statusCode = STATUS_CODES.CONFLICT;

  constructor(public readonly message: string) {
    super(message);
  }
}
