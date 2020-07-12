import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LifeCicle from './LifeCicle';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <LifeCicle />
  </React.StrictMode>,
  document.getElementById('cicle')
);
