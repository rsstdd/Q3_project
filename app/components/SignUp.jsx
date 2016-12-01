import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
  getInitialState() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      age: '',
      country: '',
      bio: '',
      imgUrl: ''
    };
  },

  handleChange(event) {
    const nextState = { [event.target.name]: event.target.value };

    this.setState(nextState);
  },

  handleSignUp(event) {
    event.preventDefault();
    axios.post('/api/players', {
      email: this.state.firstName,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      country: this.state.country,
      bio: this.state.bio,
      imgUrl: this.state.imgUrl
    })
    .then((response) => {
      // this.props.authUser(true);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  },

  render() {
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
                hintText="Country"
                name="country"
                onChange={this.handleChange}
                value={this.state.country}
                // errorText="The error text can be as long as you want, it will wrap."
              /><br />
              <TextField
                hintText="What's your story? Write your bio here"
                name="bio"
                onChange={this.handleChange}
                value={this.state.bio}
                // errorText="This field is required"
                // floatingLabelText="Floating Label Text"
              /><br />
              <TextField
                hintText="Avatar URL (for profile pic)"
                name="imgUrl"
                onChange={this.handleChange}
                value={this.state.imgUrl}
                // errorText="This field is required"
                // floatingLabelText="Floating Label Text"
              /><br />

          <div>

            <div>
            <Link to='/profile'>
              <RaisedButton type="button" name="button" label="Submit!" onClick={this.handleSignUp} />
            </Link>
            </div>

          </div>
        </div>
      </Paper>
          </div>
    )}
});

export default SignUp;

// firstName: this.refs['firstName'].value,
// lastName: this.refs['lastName'].value,
// userName: this.refs['userName'].value,
// email: this.refs['email'].value,
// password: this.refs['password'].value
