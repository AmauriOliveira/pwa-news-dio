/* eslint-disable no-use-before-define */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
