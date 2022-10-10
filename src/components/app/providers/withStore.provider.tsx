import { Provider } from 'react-redux';
import { store } from 'store';
import { ProviderComponent } from './types';

export const withStore = (Component: ProviderComponent) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
