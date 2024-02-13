import { SerializedError } from 'api/core';
import { ProcessEnum } from 'utils/constants';

export type AuthState = {
  isAuth: boolean;
  process: ProcessEnum;
  error: SerializedError | null;
};
