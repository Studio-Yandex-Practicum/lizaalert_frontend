import { ReactNode } from 'react';
import { Dispatch } from '@reduxjs/toolkit';

export type ErrorBoundaryProps = {
  children: ReactNode;
  dispatch: Dispatch;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};
