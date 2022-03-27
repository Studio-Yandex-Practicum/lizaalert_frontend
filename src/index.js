import ReactDOM from 'react-dom';
import './styles/index.scss';
import React from 'react';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
