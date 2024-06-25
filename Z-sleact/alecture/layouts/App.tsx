import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="login" />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};

export default App;
