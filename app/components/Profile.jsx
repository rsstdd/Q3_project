import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import { Match, Link } from 'react-router';
// import TextField from 'material-ui/TextField';

import Avatar from 'material-ui/Avatar';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const containerStyle = {
  height: 400,
  width: 950,
  margin: '10px auto 0 auto',
  textAlign: 'center',
  // display: 'inline-block',
  display: 'flex',
  // justifyContent: 'space-around',
  justifyContent: 'center',
  alignItems: 'center'
};

const imgContainer = {
  height: 200,
  width: 200,
  margin: 5,
  display: 'inline-block',

};

const avStyle = {margin: 5};

const buttonStyle = {margin: 12};


// const MovieDialog = React.createClass ({
//   getInitialState(){
//     return {
//       open: false,
//     };
//   },
//
//   handleOpen(){
//     this.setState({open: true});
//   },
//
//   handleClose(){
//     this.setState({open: false});
//   },

const Profile = (props) => (
  <div>
    <Paper style={containerStyle} zDepth={1}>

      <Paper style={imgContainer} zDepth={0}>
        <div>
            <Avatar
              src={props.avatarUrl}
              size={200}
              style={avStyle}
              />
        </div>
      </Paper>

        <div>
          <h1>{`${props.firstName} ${props.lastName}`}</h1>
          {/* <h2>First </h2> */}
          <h3>Age: {props.age}</h3>
          <h3>Hometown: {props.hometown}</h3>
          {/* <h3>Email: {props.email}</h3> */}

        </div>

        <div >
        <RaisedButton label="Add Match Results" style={buttonStyle} />
        </div>

    </Paper>

    <Paper style={containerStyle} zDepth={1}>
    <Table>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow adjustForCheckbox={false}>
          <TableHeaderColumn>Match Number</TableHeaderColumn>
          <TableHeaderColumn>Opponent</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Score</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>

        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>John Smith</TableRowColumn>
          <TableRowColumn>Won</TableRowColumn>
          <TableRowColumn>11 - 9</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>Randal White</TableRowColumn>
          <TableRowColumn>Lost</TableRowColumn>
          <TableRowColumn>5 - 11</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>Stephanie Sanders</TableRowColumn>
          <TableRowColumn>Won</TableRowColumn>
          <TableRowColumn>11 - 6</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>Steve Brown</TableRowColumn>
          <TableRowColumn>Won</TableRowColumn>
          <TableRowColumn>11 - 3</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>Bill Bob</TableRowColumn>
          <TableRowColumn>Won</TableRowColumn>
          <TableRowColumn>11 - 8</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn>Bozo the Clown</TableRowColumn>
          <TableRowColumn>Lost</TableRowColumn>
          <TableRowColumn>3 - 11</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
        </TableRow>
      </TableBody>

      </Table>

    </Paper>


  </div>
);

export default Profile;
