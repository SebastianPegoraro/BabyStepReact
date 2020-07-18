import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LifeCicle from './LifeCicle';
import UpdateWhenNewProp from './UpdateWhenNewProp';
import MapFromArray from './MapFromArray';
import HigherOrderComponent from './HigherOrderComponent';
/*
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

ReactDOM.render(
  <React.StrictMode>
    <MapFromArray />
  </React.StrictMode>,
  document.getElementById('map')
)
*/

ReactDOM.render(
  <React.StrictMode>
    <HigherOrderComponent />
  </React.StrictMode>,
  document.getElementById('hoc')
)
