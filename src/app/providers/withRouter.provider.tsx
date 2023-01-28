import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from 'components/molecules/loader';
import type { ProviderComponent } from './types';

/**
 * Провайдер оборачивает приложение в BrowserRouter с Suspense.
 * Во время ленивой подгрузки чанка может появиться лоадер.
 * */

export const withRouter = (Component: ProviderComponent) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
