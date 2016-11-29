import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import { Match, Link } from 'react-router';
// import TextField from 'material-ui/TextField';

import Avatar from 'material-ui/Avatar';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const containerStyle = {
  height: 500,
  width: 1350,
  margin: 10,
  textAlign: 'center',
  // display: 'inline-block',
};

const imgContainer = {
  height: 200,
  width: 200,
  margin: 5,
  display: 'inline-block',

};

const avStyle = {margin: 5};

// const textContainer = {
//   height: 300,
//   width: 1000,
  // textAlign: 'left,'
  // verticalAlign: 'middle',
//
// };


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

    </Paper>

  </div>
);

export default Profile;
