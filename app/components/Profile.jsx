import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';


import { Match, Link } from 'react-router';

import { AutoComplete, Avatar, DatePicker, FlatButton, Paper, TextField, RaisedButton }  from 'material-ui/';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Bio from './Bio';
import AddMatchToHistory from './AddMatchToHistory';
import MatchTable from './MatchTable';

const buttonStyle = {margin: 12};

const Profile = React.createClass({
  getInitialState(){
    return {
      p1Id: '',
      p2Id: '',
      scoreP1: '',
      scoreP2: '',
      winP1: '',
      winP2: '',
      players: [],
      matches: []
    }
  },

  componentDidMount() {
    axios.get('/api/matches', {
      params: {
        id: this.props.playerId
      }
    })
      .then((res) => {
        // this.setState({ isLoggedIn: res.data });
        console.log(res);
      })
      .catch((err) => {
        // this.setState({ loadErr: err });
        console.log(err);
      });
  },

  addNewMatchToHistory(addedMatch) {
    this.setState({
      matches: this.state.matches.concat(
        {
          player1Name: addedMatch.player1Name,
          player1Score: addedMatch.player1Score,
          player2Name: addedMatch.player2Name,
          player2Score: addedMatch.player2Score,
          date: addedMatch.date
        }
      )


      // player1Name: addedMatch.player1Name,
      // player1Score: addedMatch.player1Score,
      // player2Name: addedMatch.player2Name,
      // player2Score: addedMatch.player2Score,
      // date: addedMatch.date

      // NEED Logic to determine if Player1 Won or Lost

    })
  },

  render() {
    return <div>
      <Bio
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        age={this.props.age}
        country={this.props.country}
        bio={this.props.bio}
        imgUrl={this.props.imgUrl}
      />
      <AddMatchToHistory
        { ...this.state }
        addNewMatchToHistory={this.addNewMatchToHistory}
       />
      <MatchTable
        matches={this.state.matches}
        addNewMatchToHistory={this.addNewMatchToHistory}
      />
    </div>
  }
});

export default Profile;
