import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from 'components/molecules/loader';
import { ProviderComponent } from './types';

export const withRouter = (Component: ProviderComponent) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
