import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Repos from './pages/repositorios';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/repos/:id" component={Repos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;