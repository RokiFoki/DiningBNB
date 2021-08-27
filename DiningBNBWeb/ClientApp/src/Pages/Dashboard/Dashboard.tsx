import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import Home from './Home/Home';
import Settings from './Settings/Settings.lazy';

const Dashboard = () => { 
  let { path } = useRouteMatch();
  return (
  <div className={styles.Dashboard} data-testid="Dashboard">
    <Switch>
      <Route exact path={path}>
        <Home></Home>
      </Route>
      <Route path={`${path}/settings`}>
        <Settings></Settings>
      </Route>
    </Switch>
  </div>
  );
}

export default Dashboard;
