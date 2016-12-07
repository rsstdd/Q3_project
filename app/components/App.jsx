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
      playerId: 0,
      players: [],
      playerNames: [],
      user: [],
      matches: []
    };
  },

  componentDidMount() {
    axios.get('/api/me') // isLoggedIn then user info
      .then((res) => {
        console.log(res.data.id);
        this.setState({
          isLoggedIn: true,
          playerId: res.data.id,
          user: res.data
        });
      })
      .then(() => {
        this.getPlayers();
        this.getMatches(this.state.playerId);
      })
      .catch((err) => {
        this.setState({ isLoggedIn: false })
        console.log(err);
      });
  },

  getPlayers() {
    axios.get('/api/players')
      .then((res) => {
        let players = res.data;

        players = players.map((obj) => {
          return {
            email: obj.email,
            password: obj.password,
            firstName: obj.firstName,
            lastName: obj.lastName,
            age: obj.age,
            country: obj.country,
            bio: obj.bio,
            id: obj.id,
            imgUrl: obj.imgUrl
          };
        });

        const playerNames = players.map((item) => {
          return item.firstName;
        });

        this.setState({ playerNames: playerNames, players: players });
      });
  },

  getMatches(playerId) {
    axios.get(`/api/matches/${playerId}`)
    .then((res) => {
      const matchesData = res.data;

      if (matchesData.length > 0) {
        this.setState({ matches: matchesData });
      }

    })
    .catch((err) => {
      console.log(err);
    });
  },

  authenticateUser(email, password) {
    axios.post('api/token', { email, password })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    });
  },

  // logOut() {
  //   this.setState({
  //     isLoggedIn: false,
  //     playerId: 0,
  //     players: [],
  //     playerNames: [],
  //     user: [],
  //     matches: []
  //   });
  // },

  render() {
    console.log(this.state.playerId, 'isLoggedIn');
    console.log(this.state.isLoggedIn, 'isLoggedIn');
    console.log(this.state.user, 'user');
    console.log(this.state.matches, 'matches');
    console.log(this.state.players, 'players');
    return (
      <BrowserRouter >
        <div>
          <Header
            logout={this.logOut}
          />
          <Main
            authenticateUser={this.authenticateUser}
            getMatches={this.getMatches}
            getPlayers={this.getPlayers}
            isLoggedIn={this.state.isLoggedIn}
            matches={this.state.matches}
            playerId={this.state.playerId}
            playerNames={this.state.playerNames}
            players={this.state.players}
            user={this.state.user}
          />
        </div>
      </BrowserRouter>
    );
  }
});

export default App;
