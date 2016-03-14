/// <reference path="../typings/tsd.d.ts" />

import * as React from "react"
import Root  from "./myjs.js"

export class Main extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return  <div>
                    <header><h1>Boiler room</h1></header>
                    <Root/>
                    <footer>Footer</footer>
                </div>;
    }
};
