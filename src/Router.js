import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthorPage from './pages/author';
import CharactersPage from './pages/characters';
import LandingPage from './pages/landing';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about_the_author" component={AuthorPage}/>
        <Route path="/characters" component={CharactersPage}/>
        <Route path="*" component={LandingPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
