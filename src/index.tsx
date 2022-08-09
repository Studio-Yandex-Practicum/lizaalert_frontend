import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from './components/pages';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import { configureAxios } from './api/configureAxios';
import importBuildTarget from './config/import-build-target';
import './styles/index.scss';

configureAxios();

importBuildTarget()
  .then(({ default: Environment }) => {
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
  })
  .catch(() => {
    /* TODO: показать окошко, что все пропало */
  });

reportWebVitals();
