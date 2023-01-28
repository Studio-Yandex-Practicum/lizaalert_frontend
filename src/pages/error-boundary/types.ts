import type { ReactNode } from 'react';
import type { Dispatch } from '@reduxjs/toolkit';

export type ErrorBoundaryProps = {
  children: ReactNode;
  dispatch: Dispatch;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};
