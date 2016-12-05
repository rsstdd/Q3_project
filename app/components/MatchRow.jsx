  import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Match, Link } from 'react-router';
import { AutoComplete, Avatar, DatePicker, FlatButton, Paper, TextField, RaisedButton }  from 'material-ui/';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const smallAvatar = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px'
};

const rows = {
  // paddingBottom: '10px'
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // marginTop: '10px'
};

const MatchRow = React.createClass({
  render() {
     const rows = this.props.matches.map((match) => {
      return (
        <TableRow
          key={match.index}
          style={rows}
          >
        <TableRowColumn>
          <Avatar
            size={40}
            src={match.p1Img}
            style={smallAvatar}
          />
          </TableRowColumn>
          <TableRowColumn>{match.p1FirstName} {match.p1LastName}</TableRowColumn>
          <TableRowColumn />
          <TableRowColumn>{match.winP1 ? 'Win' : 'Loss'}</TableRowColumn>
          <TableRowColumn />
          <TableRowColumn>{Number.parseInt(match.scoreP1)}</TableRowColumn>
          <TableRowColumn />
          <TableRowColumn />
          <TableRowColumn>{Number.parseInt(match.scoreP2)}</TableRowColumn>
          <TableRowColumn>{match.p2FirstName} {match.p2LastName}</TableRowColumn>
          <TableRowColumn>
            <Avatar
              size={40}
              src={match.p2Img}
              style={smallAvatar}
            />
          </TableRowColumn>
        </TableRow>
      );
     });

    return (
      <div>
        { rows }
      </div>
    );
  }
});

export default MatchRow;
