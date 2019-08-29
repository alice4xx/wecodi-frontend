import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Footer from './Components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
