import React from 'react';
import ReactDOM from 'react-dom';


import Menu from './components/menu';
import Home from './components/home'


ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

