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

const SignIn = () => (
  <div>
      <div>
        <Paper style={style} zDepth={1}>
            <h1>Welcome Back. Please Sign In...</h1>
              <TextField
                hintText="Email Address"
                // errorText="This field is required"
                // floatingLabelText="Floating Label Text"
              /><br />
              <TextField
                type="password"
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
        </Paper>
      </div>
  </div>
);

export default SignIn;
