import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from './components/pages';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import importBuildTarget from './config/import-build-target';
import './styles/index.scss';

importBuildTarget().then(({ default: Environment }) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <Environment />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

reportWebVitals();
