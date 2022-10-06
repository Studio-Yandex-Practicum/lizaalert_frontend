import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from 'components/molecules/loader';
import { ProviderComponent } from './types';

/* eslint react/function-component-definition: 0 */
export const withRouter = (Component: ProviderComponent) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
