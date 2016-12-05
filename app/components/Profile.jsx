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

  render() {
    return (
      <div>
        <Bio
          matches={this.props.matches}
          player={this.props.player}
          playerId={this.props.playerId}
          players={this.props.players}
        />
        <AddMatchToHistory
          addNewMatchToHistory={this.addNewMatchToHistory}
          matches={this.props.matches}
          player={this.props.player}
          playerId={this.props.playerId}
          playerNames={this.props.playerNames}
          players={this.props.players}
        />
        <MatchTable
          matches={this.props.matches}
          players={this.props.players}
        />
      </div>
    );
  }
});

export default Profile;
