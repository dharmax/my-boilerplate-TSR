
/// <reference path="../typings/tsd.d.ts" />
import {PropTypes, Component} from 'react';
import * as React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {Explore, RepoPage, UserPageContainer} from "./MainComponents"


interface IRouter {
    replaceWith(path: string);
}

interface IRouterContext {
    router: IRouter;
}


export default class RootRouter extends Component<any,any> {
    context: IRouterContext;

    static contextTypes = {
        router: React.PropTypes.func.isRequired
    }

  render() {
    // jscs:disable
    return (
      <Router history={hashHistory}>
        <Route name='explore' path='/' component={Explore}>
          <Route name='repo' path='/:login/:name' component={RepoPage} />
          <Route name='user' path='/:login' component={UserPageContainer} />
        </Route>
      </Router>
    );
    // jscs:enable
  }
}
