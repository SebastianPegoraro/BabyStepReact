import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LifeCicle from './LifeCicle';
import UpdateWhenNewProp from './UpdateWhenNewProp';

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

ReactDOM.render(
  <React.StrictMode>
    <UpdateWhenNewProp />
  </React.StrictMode>,
  document.getElementById('update')
);