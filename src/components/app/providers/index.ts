import { compose } from '@reduxjs/toolkit';
import { withStore } from './withStore';
import { withErrorBoundary } from './withErrorBoundary';
import { ProviderReturnType } from './types';
import { withRouter } from './withRouter';
import { withAuth } from './withAuth';

export const withProviders = compose<ProviderReturnType>(
  withStore,
  withErrorBoundary,
  withRouter,
  withAuth
);