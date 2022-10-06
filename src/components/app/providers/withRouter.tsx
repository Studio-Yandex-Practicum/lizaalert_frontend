import { ReactElement, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '../../molecules/loader';

/* eslint react/function-component-definition: 0 */
export const withRouter = (Component: () => ReactElement) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
