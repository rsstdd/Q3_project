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
  getInitialState() {
    return {
      p2Id: '',
      scoreP1: '',
      scoreP2: '',
      winP1: '',
      winP2: '',
      AutoMatches: []
    };
  },

  addNewMatchToHistory(addedMatch) {
    this.setState({
      AutoMatches: this.props.matches.concat(
        {
          player1Name: addedMatch.player1Name,
          player1Score: addedMatch.player1Score,
          player2Name: addedMatch.player2Name,
          player2Score: addedMatch.player2Score,
          date: addedMatch.date
        }
      )
    });
  },

  render() {
    console.log(this.state.p1Id, 'profile');
    return <div>
      <Bio
        matches={this.props.matches}
        playerId={this.props.playerId}
      />
      <AddMatchToHistory
        addNewMatchToHistory={this.addNewMatchToHistory}
        matches={this.props.matches}
        players={this.props.players}
       />
      <MatchTable
        Automatches={this.state.Automatches}
        matches={this.props.matches}
        players={this.props.players}
      />
    </div>
  }
});

export default Profile;
