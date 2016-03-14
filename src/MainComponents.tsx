/// <reference path="../typings/tsd.d.ts" />
import * as React from "react"


export class Explore extends React.Component {
    render(): React.ReactElement<{}> {
        return  <div>
                  explore
                  {this.props.children}

                </div>;
    }
};

export class RepoPage extends React.Component {
    render(): React.ReactElement<{}> {
        return  <div>
                  repository
                </div>;
    }
};
export class UserPage extends React.Component {
    render(): React.ReactElement<{}> {
        return  <div>
                  user page

                </div>;
    }
};
