import ErrorBoundary from '../../pages/error-boundary/error-boundary';
import { ProviderComponent, ProviderReturnType } from './types';

/* eslint react/function-component-definition: 0 */
export const withErrorBoundary =
  (Component: ProviderComponent): ProviderReturnType =>
  () =>
    (
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    );
