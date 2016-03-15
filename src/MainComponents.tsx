/// <reference path="../typings/tsd.d.ts" />

import * as React from "react"
import * as ReactRouter from "react-router"

import * as Paper from 'material-ui/lib/paper';
import * as TextField from 'material-ui/lib/text-field'
import * as Checkbox from 'material-ui/lib/checkbox'
import * as RaisedButton from 'material-ui/lib/raised-button'
import * as Divider from 'material-ui/lib/divider'

var Link = ReactRouter.Link;

interface ILoginState {
  username:string
  password:string
  rememberMe:boolean
}
export class LoginForm extends React.Component<{}, ILoginState> {
  constructor(props) {
    super(props)
    this.state = { rememberMe: false }
  }
  style = {
    marginLeft: 20,
  }
  submit() {
    console.log(this.state)
  }
  render() {
      return <Paper>
      <TextField hintText="User name" style={this.style} underlineShow={false} />
      <TextField hintText="password" type="password" style={this.style} underlineShow={false} />
      <Divider/>
      <Checkbox checked={this.state.rememberMe}>Remember me</Checkbox>
      <Divider/>
      <RaisedButton onClick={this.submit} label="login"/>
      </Paper>
    }
}

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
      return <div>
        repository
      </div>;
    }
};

import * as Card from 'material-ui/lib/card/card';
import * as CardActions from 'material-ui/lib/card/card-actions';
import * as CardHeader from 'material-ui/lib/card/card-header';
import * as CardMedia from 'material-ui/lib/card/card-media';
import * as CardTitle from 'material-ui/lib/card/card-title';
import * as FlatButton from 'material-ui/lib/flat-button';
import * as CardText from 'material-ui/lib/card/card-text';

class UserPage extends React.Component<{},any> {
  constructor(props) {
    super(props)
    this.state = { username: "עחשוורוש"}
  }
  render(): React.ReactElement<{}> {
    return <Card>
      <CardHeader
        title="user {this.state.username}"
        subtitle="Subtitle"
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardText>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
     </CardText>
     <CardActions>
       <FlatButton label="Action1" />
       <FlatButton label="Action2" />
     </CardActions>
    </Card>
  }
}
export class UserPageContainer extends React.Component<{},{}> {

  render(): React.ReactElement<{}> {
    let component = <UserPage/>
    // component = <LoginForm/>
    return <div>
      {component}
    </div>;
  }
};
