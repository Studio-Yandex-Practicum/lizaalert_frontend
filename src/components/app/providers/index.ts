import { compose } from '@reduxjs/toolkit';
import { withStore } from './withStore.provider';
import { withErrorBoundary } from './withErrorBoundary.provider';
import { withRouter } from './withRouter.provider';
import { withAuth } from './withAuth.provider';
import { ProviderReturnType } from './types';

export const withProviders = compose<ProviderReturnType>(
  withStore,
  withErrorBoundary,
  withRouter,
  withAuth
);
