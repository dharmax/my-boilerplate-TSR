/// <reference path="../typings/tsd.d.ts" />

import * as React from "react"
import Root  from "./myjs.js"

export class Main extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return  <div>
                    This is main page
                    <Root/>
                </div>;
    }
};
