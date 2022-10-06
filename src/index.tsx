import React from 'react';
import ReactDOM from 'react-dom';
import { isDevEnv } from './config';
import { configureAxios } from './config/configure-axios';
import { importBuildTarget } from './config/import-build-target';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

configureAxios();

importBuildTarget()
  .then(({ default: Environment }) => {
    ReactDOM.render(
      <React.StrictMode>
        <Environment />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch(() => {
    /* TODO: показать окошко, что все пропало */
  });

if (isDevEnv) {
  reportWebVitals();
}
