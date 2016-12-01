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
      })
      .catch((err) => {
        this.setState({ loadErr: err });
      });
  },

  handleAuthPlayer(bool, playerId) {
    this.setState({ isLoggedIn: bool });
    this.setState({ playerId: playerId });
  },

  render() {
    return (
      <BrowserRouter >
        <div>
          <Header />
          <Main
            handleAuthPlayer={this.handleAuthPlayer}
            {...this.state}
          />
        </div>
      </BrowserRouter>
    );
  }
});

export default App;
