import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landing';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" component={LandingPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
