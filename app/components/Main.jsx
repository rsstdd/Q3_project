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
              handleAuthenticateUser={this.props.handleAuthenticateUser}
              handleSignUpPlayer={this.props.handleSignUpPlayer}
              handleGetUserId={this.props.handleGetUserId}
              isLoggedIn={this.props.isLoggedIn}
              playerId={this.props.playerId}
            />
            }
          />

        <Match pattern="/signin" render={
          () => this.props.isLoggedIn ? <Redirect to="/profile" /> : <SignIn
            handleAuthenticateUser={this.props.handleAuthenticateUser}
            handleGetUserId={this.props.handleGetUserId}
            isLoggedIn={this.props.isLoggedIn}
            playerId={this.props.playerId}
          />
          }
        />

        <Match pattern="/profile" render={
          () => this.props.id > 0 ? <Redirect to="/profile" /> : <Profile
            getMatches={this.props.getMatches}
            matches={this.props.matches}
            playerId={this.props.playerId}
            player={this.props.player}
            players={this.props.players}
            playerNames={this.props.playerNames}
          />
          }
        />

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
