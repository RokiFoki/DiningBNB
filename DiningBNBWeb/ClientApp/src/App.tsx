import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Dashboard from './Pages/Dashboard/Dashboard.lazy';
import Login from './Pages/Login/Login.lazy';
import SignIn from './Pages/SignIn/SignIn.lazy';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage></LandingPage>
      </Route>
      <Route path="/dashboard">
        <Dashboard></Dashboard>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signin">
        <SignIn></SignIn>
      </Route>
    </Switch>
  );
}

export default App;
