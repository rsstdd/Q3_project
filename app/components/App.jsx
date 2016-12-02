import { BrowserRouter } from 'react-router';
import Header from './Header';
import Main from './Main';

import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = React.createClass({

  getInitialState() {
    return {

      isLoggedIn: false,

      playerId: 0

    };
  },

  componentDidMount() {
    axios.get('/api/token')
      .then((res) => {
        this.setState({ isLoggedIn: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        this.setState({ loadErr: err });
      });
  },

  handleSignUpPlayer(playerId) {
    this.setState({ playerId: playerId });
    this.setState({ isLoggedIn: true });
  },

  handleSignInPlayer(playerId) {
    this.setState({ playerId: playerId });
    this.setState({ isLoggedIn: true });
  },

  render() {
    // console.log(this.state.isLoggedIn);
    // console.log(this.state.playerId);

    return (
      <BrowserRouter >
        <div>
          <Header />
          <Main
            handleSignUpPlayer={this.handleSignUpPlayer}
            handleSignInPlayer={this.handleSignInPlayer}
            isLoggedIn={this.state.isLoggedIn}
            playerId={this.state.playerId}
          />
        </div>
      </BrowserRouter>
    );
  }
});

export default App;
