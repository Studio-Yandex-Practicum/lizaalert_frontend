import { GENERAL_ERROR } from 'utils/constants';
import type { SerializedErrorType } from './types';

export class SerializedError {
  code?: SerializedErrorType['code'];

  message?: SerializedErrorType['message'];

  constructor({ code, message }: SerializedErrorType) {
    this.code = code;
    this.message = message ?? GENERAL_ERROR;
  }
}
