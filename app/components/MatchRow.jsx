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
  paddingBottom: '10px'
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // marginTop: '10px'
};

const MatchRow = React.createClass({
  render() {
     const rows = this.props.matches.map((item) => {
      return (
        <TableRow
          style={rows}
          key={item.index}
          >
          <TableRowColumn>
            <Avatar
              src={item.p1Img}
              size={40}
              style={smallAvatar}
              />
            </TableRowColumn>

            <TableRowColumn>{item.p2FirstName} {item.p2LastName}</TableRowColumn>

            <TableRowColumn>{(item.winP1) ? 'Win' : 'Loss'}</TableRowColumn>
            <TableRowColumn>{Number.parseInt(item.scoreP1)} to {Number.parseInt(item.scoreP2)}</TableRowColumn>
            <TableRowColumn> _ </TableRowColumn>
            <TableRowColumn> _ </TableRowColumn>
            <TableRowColumn> _ </TableRowColumn>

          {/* <TableRowColumn>11/29/2016</TableRowColumn> */}
          {/* <TableRowColumn>{Number.parseInt(props.matches.length)}</TableRowColumn> */}
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
