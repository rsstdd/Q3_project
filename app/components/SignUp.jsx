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

  handleSignUp(event) {
    const email =  this.state.email,
          password = this.state.password,
          firstName = this.state.firstName,
          lastName = this.state.lastName,
          age = this.state.age,
          country = this.state.country,
          bio = this.state.bio,
          imgUrl = this.state.imgUr;

    if (!firstName.trim()) {
      alert('First name must not be blank');
    }
    if (!lastName.trim()) {
      alert('Last name must not be blank');
    }
    // if (!email.trim()) {
    //   alert('Email must not be blank.');
    // }
    // if (email.indexOf('@') > 0) {
    //   alert('Email must be valid.');
    // }
    if (!password || password.length < 4) {
      alert('Password must be valid.');
    }
    if (!country.trim()) {
      alert('Country must not be blank.');
    }
    if (!bio.trim()) {
      alert('Bio must not be blank.');
    }
    if (!password.trim() || password.length < 8) {
      alert('Avatar Url must not be blank.');
    }

    axios.post('/api/players',
    { email, password, firstName, lastName, age, country, bio, imgUrl
    })
    .then((res) => {
      // console.log(res.data, 'this is the data /api/players');
      const newPlayer = res.data;
      const id = res.data.id;
      console.log(id);
      this.props.handleSignUp(id)
      return newPlayer;
    })
    .then((newPlayer) => {
      axios.post('/token', { email, password })
        .then((res) => {
          console.log('*************');
          const players = res.config;
          console.log(players);
          console.log('*************');
          const playerId = players;
          this.props.authenticated(true);
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
              errorText="This field is required"
            />
            <br />
            <TextField
              hintText="Last Name"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              errorText="The error text can be as long as you want, it will wrap."
            /><br />
            <TextField
              hintText="Email Address"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              errorText="This field is required"
              // floatingLabelText="Floating Label Text"
            /><br />
            <TextField
              type="password"
              hintText="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              errorText="This field is required."
            /><br />
              <TextField
                hintText="Age"
                name="age"
                onChange={this.handleChange}
                value={this.state.age}
                errorText="This field is required"
              />
              <br />
              <TextField
                hintText="Country"
                name="country"
                onChange={this.handleChange}
                value={this.state.country}
                errorText="The error text can be as long as you want, it will wrap."
              /><br />
              <TextField
                hintText="What's your story? Write your bio here"
                name="bio"
                onChange={this.handleChange}
                value={this.state.bio}
                errorText="This field is required"
              /><br />
              <TextField
                hintText="Avatar URL (for profile pic)"
                name="imgUrl"
                onChange={this.handleChange}
                value={this.state.imgUrl}
                errorText="This field is required"
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
