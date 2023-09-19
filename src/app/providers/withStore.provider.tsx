import { Provider } from 'react-redux';
import { store } from 'store';
import { setToken } from 'store/auth/slice';
import type { ProviderComponent } from './types';

/**
 * Провайдер оборачивает приложение в Redux-store.
 * */

const token = localStorage.getItem('token.access');

if (token) {
  store.dispatch(setToken(token));
}

export const withStore = (Component: ProviderComponent) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
