import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';

import Paper from 'material-ui/Paper';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';

import { Match, Link, Redirect } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 200,
  width: 1350,
  margin: 20,
  textAlign: 'center',
  // display: 'inline-block'
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const buttonWrapper = {
  height: 140,
  width: 500,
  margin: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const Main = React.createClass({
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


      // firstName: 'Ping Pong',
      // lastName: 'Lady',
      // email: 'grandmapingpong@gmail.com',
      // password: '',
      // age: '79',
      // hometown: 'Cleveland',
      // imgUrl: 'http://i.imgur.com/xvNsFDH.png'
    };
  },

  getNewUserInfo(user) {
    this.setState({
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      country: user.country,
      bio: user.bio,
      imgUrl: user.imgUrl
    });
  },

  render() {
    return (
      <main>
        <Match pattern="/signup" render={
          () => this.props.isLoggedIn ? <Redirect to="/profile" /> : <SignUp
            // getNewUserInfo={this.getNewUserInfo}
            // playerId={this.props.playerId}
            isLoggedIn={this.props.isLoggedIn}
            playerId={this.props.playerId}
            handleAuthPlayer={this.props.handleAuthPlayer}
          />

        }/>
        <Match pattern="/signin" component={SignIn} />
        <Match pattern="/profile" render={
          () => <Profile
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            age={this.state.age}
            country={this.state.country}
            bio={this.state.bio}
            imgUrl={this.state.imgUrl}
            playerId={this.props.playerId}
        />

        }/>

        <Match pattern="/" exactly render={
          () =>  <div>
            <Paper
              style={style} zDepth={1}
            >
              <div>
                <div>
                  <h2>Keep track of stats. Create an Account or Sign In to get started...</h2>
                </div>
              </div>
              <Paper
                style={buttonWrapper} zDepth={1}
              >
              <div>
                <Link to='/signup'>
                  <RaisedButton label="Create Account" />
                </Link>
              </div>
              <br />
              <div>
                <Link to='/signin'>
                  <RaisedButton label="Sign In" />
                </Link>
              </div>
              </Paper>
            </Paper>
          </div>
          }
        />
      </main>
    );
  }
});

export default Main;
