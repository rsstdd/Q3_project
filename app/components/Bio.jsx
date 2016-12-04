import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Match, Link } from 'react-router';
import { AutoComplete, Avatar, DatePicker, FlatButton, Paper, TextField, RaisedButton }  from 'material-ui/';

const containerStyle = {
  height: 400,
  width: 950,
  margin: '10px auto 0 auto',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const imgContainer = {
  height: 275,
  width: 275,
  display: 'inline-block'
};

const avStyle = {
  verticalAlign: 'top',
  width: 275,
  height: 275
};

const Bio = React.createClass({

  render() {
    if (this.props.player) {
      return (
        <div>
          <Paper style={containerStyle} zDepth={1}>
            <Paper style={imgContainer} zDepth={0}>
              <div>
                <Avatar
                  src={this.props.player.imgUrl}
                  size={230}
                  style={avStyle}
                />
              </div>
            </Paper>

            <div>
              <h1>{`${this.props.player.firstName} ${this.props.player.lastName}`}</h1>
              <h3>Country: {this.props.player.country}</h3>
              <h3>Age: {this.props.player.age}</h3>
              <h3>Bio: {this.props.player.bio}</h3>
            </div>
          </Paper>
        </div>
      );
    }

    return <div style={containerStyle}>Loading...</div>;
  }
});

export default Bio;
