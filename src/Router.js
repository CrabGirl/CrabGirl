import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthorPage from './pages/author';
import LandingPage from './pages/landing';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about_the_author" component={AuthorPage}/>
        <Route path="*" component={LandingPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
