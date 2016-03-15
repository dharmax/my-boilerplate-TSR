/// <reference path="../typings/tsd.d.ts" />

import * as React from "react"
import RootRouter  from "./router"
import * as AppBar from "material-ui/lib/app-bar"
import * as ReactRouter from "react-router"

var Link = ReactRouter.Link;


export class Main extends React.Component<{}, {}> {

  render(): React.ReactElement<{}> {
      let self = this
      return  <div>
                  <AppBar
                    title="Boilerplate"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                  />
                  <RootRouter/>
              </div>;
  }
};
