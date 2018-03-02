/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import PreachingPage from "./containers/PreachingPage";
import PreachingDetailPage from "./containers/PreachingDetailPage";

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/preaching" component={PreachingPage} />
      <Route path="/preachingdetail" component={PreachingDetailPage} />
    </Switch>
  </App>
);
