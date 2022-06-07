import ReactDOM from 'react-dom';
import './styles/index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { ErrorBoundary } from './components/pages';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
