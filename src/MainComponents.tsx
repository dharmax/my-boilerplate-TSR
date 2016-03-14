/// <reference path="../typings/tsd.d.ts" />

import * as React from "react"
import * as ReactRouter from "react-router"

var Link = ReactRouter.Link;

export class Explore extends React.Component<any,any> {

    render(): React.ReactElement<{}> {
        return  <div>
          <Link to="login">
            <button>login</button>
          </Link>
            {this.props.children}
        </div>;
    }
};

export class RepoPage extends React.Component<{},{}> {
    render(): React.ReactElement<{}> {
        return  <div>
                  repository
                </div>;
    }
};
export class UserPage extends React.Component<{},{}> {
    render(): React.ReactElement<{}> {
        return  <div className="page">
                  user page

                </div>;
    }
};
