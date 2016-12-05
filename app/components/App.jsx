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

      player: [],

      matches: []

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

  handleAuthenticateUser(bool) {
    this.setState({ isLoggedIn: bool });
  },

  handleSignUpPlayer(id) {
    this.setState({ playerId: id });
  },

  handleGetUserId(email) {
    axios.get('/api/players')
      .then((res) => {
        const players = res.data;
        const id = res.data.filter((obj) => {
          return obj.email === email;
        })[0].id;

        this.setState({ isLoggedIn: true });
        this.setState({ playerId: id });

        const player = players.map((obj) => {
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
        })

        this.setState({ playerNames: playerNames });
        this.setState({ players: player });
      })
      .then(() => {
        axios.get(`api/player/${this.state.playerId}`)
          .then((res) => {
            let { email, password, firstName, lastName, age, country, bio, imgUrl } = res.data;
            const player = { email, password, firstName, lastName, age, country, bio, imgUrl }

            this.setState({ player: player });
          })
          .catch((err) => {
            console.log(err);
          })
          .then(() => {
            axios.get(`/api/matches/${this.state.playerId}`)
            .then((res) => {

              const matchesData = res.data;

              this.setState({ matches: matchesData });
            })
            .catch((err) => {
              console.log(err);
            });
          })
      })
      .catch((err) => {
        console.log(err);
      });
  },

  render() {
    return (
      <BrowserRouter >
        <div>
          <Header />
          <Main
            handleAuthenticateUser={this.handleAuthenticateUser}
            handleSignUpPlayer={this.handleSignUpPlayer}
            handleGetUserId={this.handleGetUserId}
            isLoggedIn={this.state.isLoggedIn}
            matches={this.state.matches}
            player={this.state.player}
            playerId={this.state.playerId}
            players={this.state.players}
            playerNames={this.state.playerNames}
          />
        </div>
      </BrowserRouter>
    );
  }
});

export default App;
