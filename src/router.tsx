
/// <reference path="../typings/tsd.d.ts" />
import { PropTypes, Component } from 'react';
import * as React from 'react';
import { Router, Route,hashHistory } from 'react-router';
import {Explore,RepoPage,UserPage} from "./MainComponents"

export default class RootRouter extends Component<any,any> {

  render() {
    // jscs:disable
    return (
      <Router history={hashHistory}>
        <Route name='explore' path='/' component={Explore}>
          <Route name='repo' path='/:login/:name' component={RepoPage} />
          <Route name='user' path='/:login' component={UserPage} />
        </Route>
      </Router>
    );
    // jscs:enable
  }
}
