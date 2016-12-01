import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Match, Link, Redirect } from 'react-router';

import Profile from './Profile';


import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 600,
  width: 1350,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

// handleSubmit() {
//   this.props.getNewUserInfo(this.props.user);
// }

const SignUp = React.createClass({
  getInitialState(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      hometown: '',
      avatarUrl: ''
    }
  },

  handleChange(event) {
    const nextState = { [event.target.name]: event.target.value };
    this.setState(nextState);
  },

  handleClick(event) {

   // Perhaps send a JSON string to a server...
   this.props.getNewUserInfo({
     firstName: this.state.firstName,
     lastName: this.state.lastName,
     email: this.state.email,
     password: this.state.password,
     age: this.state.age,
     hometown: this.state.hometown,
     avatarUrl: this.state.avatarUrl
   });
 },


  render(){
    console.log(this.state);
    return (<div>
      {/* <Match pattern="/profile" component={Profile} /> */}
          <Paper style={style} zDepth={1}>
          <div>
              <h1>This will be the signup Form...</h1>
                <TextField
                  hintText="First Name"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                  // errorText="This field is required"
                />
                <br />
                <TextField
                  hintText="Last Name"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                  // errorText="The error text can be as long as you want, it will wrap."
                /><br />
                <TextField
                  hintText="Email Address"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  // errorText="This field is required"
                  // floatingLabelText="Floating Label Text"
                /><br />
                <TextField
                  type="password"
                  hintText="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  // errorText="This field is required."
                  // floatingLabelText="MultiLine and FloatingLabel"
                  // multiLine={true}
                  // rows={2}
                /><br />
                  <TextField
                    hintText="Age"
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.age}
                    // errorText="This field is required"
                  />
                  <br />
                  <TextField
                    hintText="Hometown"
                    name="hometown"
                    onChange={this.handleChange}
                    value={this.state.hometown}
                    // errorText="The error text can be as long as you want, it will wrap."
                  /><br />
                  <TextField
                    hintText="Avatar URL (for profile pic)"
                    name="avatarUrl"
                    onChange={this.handleChange}
                    value={this.state.avatarUrl}
                    // errorText="This field is required"
                    // floatingLabelText="Floating Label Text"
                  /><br />

              <div>

                <div>
                <Link to='/profile'>
                  <RaisedButton label="Submit!" onClick={this.handleClick} />
                </Link>
                </div>

              </div>
            </div>
          </Paper>
          </div>
    )}
});


export default SignUp;
