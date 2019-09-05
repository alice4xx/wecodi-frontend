import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Fashion from './Pages/Fashiontips/Fashion';
import InsideStitch from './Pages/InsideStitch/InsideStitch';
import Article from './Pages/Articlepages/Article';
import About from './Pages/About/About';
import Outfit from './Pages/Outfit/Outfit';
import Header from './Components/Header/Header';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/fashion-tips" component={Fashion} />
          <Route exact path="/inside-wecodi" component={InsideStitch} />
          <Route exact path="/article" component={Article} />
          <Route exact path="/about" component={About} />
          <Route exact path="/outfit-ideas" component={Outfit} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
