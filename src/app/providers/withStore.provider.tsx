import { Provider } from 'react-redux';
import { store } from 'store';
import type { ProviderComponent } from './types';

/**
 * Провайдер оборачивает приложение в Redux-store.
 * */

export const withStore = (Component: ProviderComponent) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
