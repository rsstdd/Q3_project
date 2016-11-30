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
import DatePicker from 'material-ui/DatePicker';


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

const matchContainerStyle = {
  height: 380,
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
  height: 275,
  width: 275,
  // margin: 5,
  display: 'inline-block',

};

const avStyle = {
  // margin: 1,
  verticalAlign: 'top',
  // padding: 10px;
  width: 275,
  height: 275,
  // backgroundSize: 'cover',
  // height: '100%'
};

const smallAvatar = {
  display: 'flex',
  // display: 'inline-block',
  justifyContent: 'space-around',
  justifyContent: 'right',
  alignItems: 'right'
};

const buttonStyle = {margin: 12};

const Profile = (props) => (
  <div>
    <Paper style={containerStyle} zDepth={1}>

      <Paper style={imgContainer} zDepth={0}>
        <div>
            <Avatar
              src={props.avatarUrl}
              size={230}
              style={avStyle}
              />
        </div>
      </Paper>

        <div>
          <h1>{`${props.firstName} ${props.lastName}`}</h1>
          {/* <h2>First </h2> */}
          <h3>Hometown: {props.hometown}</h3>
          <h3>Age: {props.age}</h3>
          {/* <h3>Email: {props.email}</h3> */}

        </div>



    </Paper>

    <Paper style={matchContainerStyle} zDepth={1}>

        <div>
          <div>
            <h2>Add a Match to the History Books...</h2>
            <h3>Player 1: </h3>
            <h4>Score: </h4>

            <h3>Vs.</h3>
            <h3>Player 2: </h3>
            <h4>Score: </h4>
            <div>
            <DatePicker hintText="Date" />

            </div>

          </div>
            <div >
              <RaisedButton label="Add Match Results" style={buttonStyle} />
            </div>
        </div>


    </Paper>

    <Paper style={containerStyle} zDepth={1}>
    <Table>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow adjustForCheckbox={false}>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>Opponent</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Score</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Match Count</TableHeaderColumn>

        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>
            <Avatar
              src="http://www.imageno.com/image.php?id=5nldpa1bbng3&kk=1195234931"
              size={40}
              style={smallAvatar}
              />
          </TableRowColumn>
          <TableRowColumn>John Smith</TableRowColumn>
          <TableRowColumn>Won</TableRowColumn>
          <TableRowColumn>11 - 9</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
          <TableRowColumn>1</TableRowColumn>
        </TableRow>
        <TableRow>
        <TableRowColumn>
          <Avatar
            src="http://www.imageno.com/image.php?id=s6krjflpq3w1&kk=790610578"
            size={40}
            style={smallAvatar}
            />
        </TableRowColumn>
          <TableRowColumn>Bill Gates</TableRowColumn>
          <TableRowColumn>Lost</TableRowColumn>
          <TableRowColumn>5 - 11</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
          <TableRowColumn>2</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <Avatar
              src="http://www.imageno.com/thumbs/20161129/op5pnovu3sw5.jpg"
              size={40}
              style={smallAvatar}
              />
          </TableRowColumn>
          <TableRowColumn>Stephanie Sanders</TableRowColumn>
          <TableRowColumn>Won</TableRowColumn>
          <TableRowColumn>11 - 6</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <Avatar
              src="http://www.imageno.com/image.php?id=rii1mjzmqh4h&kk=1911139329"
              size={40}
              style={smallAvatar}
              />
          </TableRowColumn>
          <TableRowColumn>Steve Brown</TableRowColumn>
          <TableRowColumn>Won</TableRowColumn>
          <TableRowColumn>11 - 3</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
          <TableRowColumn>4</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <Avatar
              src="http://www.imageno.com/image.php?id=8gvpy6o7lmjj&kk=1291262252"
              size={40}
              style={smallAvatar}
              />
          </TableRowColumn>
          <TableRowColumn>Bill Bob</TableRowColumn>
          <TableRowColumn>Won</TableRowColumn>
          <TableRowColumn>11 - 8</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
          <TableRowColumn>5</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <Avatar
              src="http://www.imageno.com/thumbs/20161129/vx7w5yq6j2tc.jpg"
              size={40}
              style={smallAvatar}
              />
          </TableRowColumn>
          <TableRowColumn>Barack Obama</TableRowColumn>
          <TableRowColumn>Lost</TableRowColumn>
          <TableRowColumn>3 - 11</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
          <TableRowColumn>6</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            <Avatar
              src="http://www.imageno.com/thumbs/20161130/m59sficwsk4z.jpg"
              size={40}
              style={smallAvatar}
              />
          </TableRowColumn>
          <TableRowColumn>Tyler Miller</TableRowColumn>
          <TableRowColumn>Lost</TableRowColumn>
          <TableRowColumn>7 - 11</TableRowColumn>
          <TableRowColumn>11/29/2016</TableRowColumn>
          <TableRowColumn>7</TableRowColumn>
        </TableRow>
      </TableBody>

      </Table>

    </Paper>


  </div>
);

export default Profile;
