import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Match, Link } from 'react-router';

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

const SignUp = () => (
  <div>
  {/* <Match pattern="/profile" component={Profile} />
  <Match pattern="/" exactly render={
      () =>  */}
      <div>
        <Paper style={style} zDepth={1}>
            <h1>This will be the signup Form...</h1>
            <div>
              <TextField
                hintText="First Name"
                // errorText="This field is required"
              />
              <br />
              <TextField
                hintText="Last Name"
                // errorText="The error text can be as long as you want, it will wrap."
              /><br />
              <TextField
                hintText="Email Address"
                // errorText="This field is required"
                // floatingLabelText="Floating Label Text"
              /><br />
              <TextField
                hintText="Password"
                // errorText="This field is required."
                // floatingLabelText="MultiLine and FloatingLabel"
                // multiLine={true}
                // rows={2}
              /><br />

              <div>
              <Link to='/profile'>
                <RaisedButton label="Submit!" />
              </Link>
              </div>

            </div>

        </Paper>
      </div>
    {/* }/> */}
  </div>
);


export default SignUp;
