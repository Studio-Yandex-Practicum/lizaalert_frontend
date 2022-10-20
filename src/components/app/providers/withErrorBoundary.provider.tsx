import ErrorBoundary from 'components/pages/error-boundary/error-boundary';
import { ProviderComponent } from './types';

/**
 * Провадер оборачивает приложение в ErrorBoundary.
 * При ошибке рендера показывается страница ошибки.
 * */

export const withErrorBoundary = (Component: ProviderComponent) => () =>
  (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
