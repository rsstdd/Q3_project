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
;

const Profile = React.createClass({
  getInitialState() {
    return {
      p1Id: this.props.playerId,
      p2Id: '',
      scoreP1: '',
      scoreP2: '',
      winP1: '',
      winP2: '',
      AutoMatches: [],
      names: this.props.playerNames
    };
  },

  addNewMatchToHistory(addedMatch) {
    this.setState({
      AutoMatches: this.props.matches.concat(
        {
          // player1Name: this.props.player.firstName,
          player1Name: this.props.player,
          player1Score: addedMatch.player1Score,
          player2Name: addedMatch.player2Name,
          player2Score: addedMatch.player2Score
        }
      )
    });
  },

  render() {
    console.log(this.props.player1Name);
    console.log('profile');

    // console.log(this.props.matches, 'profile');

    return (
      <div>
        <Bio
          matches={this.props.matches}
          playerId={this.props.playerId}
          player={this.props.player}
          players={this.props.players}
        />
        <AddMatchToHistory
          addNewMatchToHistory={this.addNewMatchToHistory}
          matches={this.props.matches}
          player={this.props.player}
          playerNames={this.props.playerNames}
          players={this.props.players}
        />
        <MatchTable
          Automatches={this.state.Automatches}
          matches={this.props.matches}
          players={this.props.players}
        />
      </div>
    );
  }
});

export default Profile;
