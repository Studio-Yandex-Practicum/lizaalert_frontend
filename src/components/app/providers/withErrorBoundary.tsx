import ErrorBoundary from 'components/pages/error-boundary/error-boundary';
import { ProviderComponent } from './types';

/* eslint react/function-component-definition: 0 */
export const withErrorBoundary = (Component: ProviderComponent) => () =>
  (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
