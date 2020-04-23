import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfilePage from './pages/profile';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" component={ProfilePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
