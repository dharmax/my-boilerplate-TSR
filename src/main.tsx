/// <reference path="../typings/tsd.d.ts" />

import * as React from "react"
import RootRouter  from "./router"
import * as ReactRouter from "react-router"
import * as AppBar from "material-ui/lib/app-bar"
import * as IconMenu from "material-ui/lib/menus/icon-menu"
import * as MenuItem from "material-ui/lib/menus/menu-item";
import * as IconButton from "material-ui/lib/icon-button";
import * as MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export class Main extends React.Component<{}, any> {

  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }
  clickSignIn() {
    this.setState( {isLoggedIn:  true})
  }
  clickSignOut() {
    this.setState( {isLoggedIn:  false})
  }
  isLoggedIn():boolean {
    return this.state.isLoggedIn
  }
  render(): React.ReactElement<{}> {
      let self = this
      return  <div>
                  <AppBar
                    title="Boilerplate"

                    iconElementRight={
                      <IconMenu
                        iconButtonElement={
                          <IconButton><MoreVertIcon /></IconButton>
                        }
                         anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                         targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                      >
                        <MenuItem primaryText="Sign in" onClick={this.clickSignIn.bind(this)} disabled={this.isLoggedIn()}/>
                        <MenuItem primaryText="Sign out" onClick={this.clickSignOut.bind(this)}  disabled={!this.isLoggedIn()}/>
                        <MenuItem primaryText="Help" />
                      </IconMenu>
                    }
                  />
                  <RootRouter/>
              </div>;
  }
};
