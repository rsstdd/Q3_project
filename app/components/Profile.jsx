import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import { Match, Link } from 'react-router';

import Avatar from 'material-ui/Avatar';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';



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
  height: 600,
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

const players = [
  'Barack Obama',
  'Bernie Sanders',
  'Bill Bob',
  'Ping Pong Lady',
  'Bill Gates',
  'Steve Brown',
  'Tyler Miller',
  'Stephanie Sanders'
];

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
        <h3>Hometown: {props.hometown}</h3>
        <h3>Age: {props.age}</h3>
      </div>
    </Paper>

    <Paper style={matchContainerStyle} zDepth={1}>
      <div>
        <div>
          <h2>Add a Match to the History Books...</h2>
          <div>
            <h4>Player 1:
                <AutoComplete
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={players}
                />
            </h4>
            <h4>Score:
              <TextField />
            </h4>
          </div>
          <h4>Vs.</h4>
          <div>
            <h4>Player 2:
              <AutoComplete
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={players}
              />
             </h4>
            <h4>Score:
              <TextField />
             </h4>
            <div>
              <DatePicker hintText="Date" />
            </div>
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
                src="http://i.imgur.com/2Hx4sTt.png"
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
              src="http://i.imgur.com/T02OOVi.png"
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
                src="http://i.imgur.com/si1bpHB.png"
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
                src="http://i.imgur.com/1RDE0bP.png"
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
                src="http://i.imgur.com/KrYeURK.png"
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
                src="http://i.imgur.com/VwvvKgE.png"
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
                src="http://i.imgur.com/M95MOfc.jpg"
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
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Profile;
