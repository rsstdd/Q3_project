import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';

import Paper from 'material-ui/Paper';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';

import { Match, Link, Redirect, BrowserRouter } from 'react-router';
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

  render() {
    return (
      // <BrowserRouter>
      <main>
          <Match
            pattern="/signup" exactly render={
            () => (
              this.props.isLoggedIn ? (
                <Redirect to="/profile" />
              ) : (
               <SignUp
                  authenticateUser={this.props.authenticateUser}
                  // getMatches={this.props.getMatches}
                  getPlayers={this.props.getPlayers}
                  isLoggedIn={this.props.isLoggedIn}
                  playerId={this.props.playerId}
                />)
              )}
          />

        <Match
          pattern="/signin" exactly render={
          () => (
            this.props.isLoggedIn ? (
              <Redirect to="/profile" />
            ) : (
             <SignIn
               authenticateUser={this.props.authenticateUser}
              //  getMatches={this.props.getMatches}
               getPlayers={this.props.getPlayers}
               isLoggedIn={this.props.isLoggedIn}
               playerId={this.props.playerId}
              />)
            )}
        />

        <Match
          pattern="/profile" exactly render={
          () => (
            this.props.isLoggedIn === false ? (
              <Redirect to="/" />
            ) : (
              <Profile
                getMatches={this.props.getMatches}
                matches={this.props.matches}
                playerId={this.props.playerId}
                playerNames={this.props.playerNames}
                players={this.props.players}
                user={this.props.user}
              />)
            )}
        />

        <Match
          pattern="/" exactly render={
          () => (
          <div>
            <Paper
              style={style} zDepth={1}
            >
              <div>
                <div>
                  <h2>
                    Keep track of stats.
                    Create an Account or Sign In to get started...
                   </h2>
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
        )}
        />
      </main>
    );
  }
});

export default Main;
