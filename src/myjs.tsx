
/// <reference path="../typings/tsd.d.ts" />
import { PropTypes, Component } from 'react';
import * as React from 'react';
import { Router, Route,hashHistory } from 'react-router';

// import App from './App';
// import RepoPage from './pages/RepoPage';
// import UserPage from './pages/UserPage';
import {Explore,RepoPage,UserPage} from "./MainComponents"

export default class Root extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route name='explore' path='/' component={Explore}>
          <Route name='repo' path='/:login/:name' component={RepoPage} />
          <Route name='user' path='/:login' component={UserPage} />
        </Route>
      </Router>
    );
  }
}
