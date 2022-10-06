import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

/* eslint react/function-component-definition: 0 */
export const withStore = (Component: () => ReactElement) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
