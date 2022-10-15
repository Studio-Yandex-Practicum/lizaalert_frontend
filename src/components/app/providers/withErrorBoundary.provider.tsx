import ErrorBoundary from 'components/pages/error-boundary/error-boundary';
import { ProviderComponent } from './types';

export const withErrorBoundary = (Component: ProviderComponent) => () =>
  (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
