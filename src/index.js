import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./Assets/scss/theme.scss";

//import App from './App';
import Home from './Views/Home/Home'

ReactDOM.render(  
  <BrowserRouter>
  <Switch>
    <Route path="/" exact render={props => <Home {...props} />} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
