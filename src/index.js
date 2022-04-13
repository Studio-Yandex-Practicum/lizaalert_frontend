import ReactDOM from 'react-dom';
import './styles/index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
