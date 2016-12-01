import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Match, Link } from 'react-router';
import { AutoComplete, Avatar, DatePicker, FlatButton, Paper, TextField, RaisedButton }  from 'material-ui/';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const smallAvatar = {
  display: 'flex',
  // display: 'inline-block',
  // justifyContent: 'space-around',
  justifyContent: 'center',
  alignItems: 'center'
};

const MatchRow = React.createClass({
  render() {
    console.log(this.props.matches);

    return (

      <TableRow>
        <TableRowColumn>
          <Avatar
            src="http://i.imgur.com/Nk5SWmv.jpg"
            size={40}
            style={smallAvatar}
            />
        </TableRowColumn>
        <TableRowColumn>Bernie Sanders</TableRowColumn>
        <TableRowColumn>Lost</TableRowColumn>
        <TableRowColumn>5 - 11</TableRowColumn>
        <TableRowColumn>11/29/2016</TableRowColumn>
        <TableRowColumn>7</TableRowColumn>
      </TableRow>
    )
  }
});

export default MatchRow;
