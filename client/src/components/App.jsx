import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import HomeContainer from '../containers/dashboardContainer';


class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={HomeContainer} />
      </Switch>
    );
  }
}


export default App;
