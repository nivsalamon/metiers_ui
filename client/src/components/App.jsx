import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './Homepage/Dashboard/index';


class App extends React.Component {

  render() {
    return (
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
              </Switch>
    );
  }
}


export default App;
