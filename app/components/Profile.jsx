import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import { Match, Link } from 'react-router';
// import TextField from 'material-ui/TextField';



const style1 = {
  height: 600,
  width: 1350,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const Profile = (props) => (
  <div>
    <Paper style={style1} zDepth={1}>
      <div>
        <h1>Welcome to your profile!</h1>
        <h2>My name is: {`${props.firstName} ${props.lastName}`}</h2>
        <h3>{props.email}</h3>
        <h3>{props.age}</h3>
        <h3>{props.hometown}</h3>
        <h3>{props.avatarUrl}</h3>
      </div>
    </Paper>
  </div>
);

export default Profile;
