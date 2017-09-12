import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import CalendarView from './CalendarView';
import Dashboard from '../containers/Dashboard';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calendar" component={CalendarView} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </main>
);

export default Main;
