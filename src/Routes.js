import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./Pages/Main";
import Header from './Components/Header';

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
