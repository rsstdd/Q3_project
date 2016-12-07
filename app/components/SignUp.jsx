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
  display: 'inline-block'
};

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

  handleSignUp(e) {
    e.preventDefault();

    const age = this.state.age;
    const bio = this.state.bio;
    const country = this.state.country;
    const email = this.state.email;
    const firstName = this.state.firstName;
    const imgUrl = this.state.imgUrl;
    const lastName = this.state.lastName;
    const password = this.state.password;

    // if (!firstName.trim()) {
    //   alert('First name must not be blank');
    // }
    // if (!lastName.trim()) {
    //   alert('Last name must not be blank');
    // }
    // if (!email.trim()) {
    //   alert('Email must not be blank.');
    // }
    // if (email.indexOf('@') !== -1) {
    //   alert('Email must be valid.');
    // }
    // if (!password || password.length < 4) {
    //   alert('Password must be valid.');
    // }
    // if (!country.trim()) {
    //   alert('Country must not be blank.');
    // }
    // if (!bio.trim()) {
    //   alert('Bio must not be blank.');
    // }
    // if (!password.trim()) {
    //   alert('Avatar Url must not be blank.');
    // }

    axios.post('/api/players', { email, password, firstName, lastName, age, country, bio, imgUrl })
    .then((res) => {
      const newPlayer = res.data[0];

      return newPlayer;
    })
    .then((newPlayer) => {
      axios.post('api/token', { email, password })
        .then((res) => {
          const playerId = res.data.id

          this.props.getPlayers();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    })
  .catch((err) => {
    console.log(err);
  });
  },

  render() {
    return (
      <div>
        <Paper style={style} zDepth={1}>
          <div>
            <h1>Sign Up to Start Playing</h1>
              <TextField
                hintText="First Name"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
              <br />
              <TextField
                hintText="Last Name"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
              /><br />
              <TextField
                hintText="Email Address"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              /><br />
              <TextField
                type="password"
                hintText="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              /><br />
                <TextField
                  hintText="Age"
                  name="age"
                  onChange={this.handleChange}
                  value={this.state.age}
                />
                <br />
                <TextField
                  hintText="Country"
                  name="country"
                  onChange={this.handleChange}
                  value={this.state.country}
                /><br />
                <TextField
                  hintText="What's your story? Write your bio here"
                  name="bio"
                  onChange={this.handleChange}
                  value={this.state.bio}
                /><br />
                <TextField
                  hintText="Avatar URL (for profile pic)"
                  name="imgUrl"
                  onChange={this.handleChange}
                  value={this.state.imgUrl}
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
    );
  }
});

export default SignUp;
