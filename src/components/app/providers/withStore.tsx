import { Provider } from 'react-redux';
import { store } from 'store';
import { ProviderComponent, ProviderReturnType } from './types';

/* eslint react/function-component-definition: 0 */
export const withStore =
  (Component: ProviderComponent): ProviderReturnType =>
  () =>
    (
      <Provider store={store}>
        <Component />
      </Provider>
    );
