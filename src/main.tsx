/// <reference path="../typings/tsd.d.ts" />

import * as React from "react"
import RootRouter  from "./router"
import * as AppBar from "material-ui/lib/app-bar"


export class Main extends React.Component<{}, {}> {

    render(): React.ReactElement<{}> {
        return  <div>
                    <AppBar
                      title="Boilerplate"
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <RootRouter/>
                </div>;
    }
};
