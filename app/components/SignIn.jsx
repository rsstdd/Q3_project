import React from 'react';
import axios from 'axios';
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
  display: 'inline-block'
};

const SignIn = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: ''
    };
  },

  handleChange(event) {
    const nextState = { [event.target.name]: event.target.value };

    this.setState(nextState);
  },

  handleSignIn(event) {
    console.log('####### SignIn CLIENT #######');
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    if (!email) {
        alert('Email must not be blank');
      }
      if (!password) {
        alert('Password must not be blank');
      }

    axios.post('/api/token', {
      email,
      password
    })
    .then((res) => {
      console.log(res);
      const playerId = res.data.id;
      console.log('@@@@@ playerId @@@@@');
      console.log(playerId);

      this.props.handleSignInPlayer(res.data, playerId);
    })
    .catch((error) => {
      console.log(error);
    });
  },

  render() {
    return (<div>
        <div>
          <Paper style={style} zDepth={1}>
              <h1>Welcome Back. Please Sign In...</h1>
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

                <div>
                <Link to='/profile'>
                  <RaisedButton type="button" name="button" label="Submit!" onClick={this.handleSignIn} />
                </Link>
                </div>
          </Paper>
        </div>
    </div>
    )}
});

export default SignIn;
