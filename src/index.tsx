import React from 'react';
import ReactDOM from 'react-dom';
import { configureAxios } from './config/configure-axios';
import App from './app/app';
import './styles/index.scss';

configureAxios();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
