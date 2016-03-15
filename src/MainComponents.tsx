/// <reference path="../typings/tsd.d.ts" />

import * as React from "react"
import * as ReactRouter from "react-router"

var Link = ReactRouter.Link;

export class Explore extends React.Component<any,any> {

  constructor(props) {
    super(props)
    this.state = { numberOfClicks: 0 }
    this.oneMoreClick = this.oneMoreClick.bind(this)
  }
  oneMoreClick()  {
    this.setState( {numberOfClicks: 1+this.state.numberOfClicks });
  }
    render(): React.ReactElement<{}> {
        return  <div>
        <Link to="login">
          <button>login</button>
        </Link>
        <button onClick={this.oneMoreClick}>impress me</button>
        count is: {this.state.numberOfClicks}
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
