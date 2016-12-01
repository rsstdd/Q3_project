import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Match, Link } from 'react-router';
import { AutoComplete, Avatar, DatePicker, FlatButton, Paper, TextField, RaisedButton }  from 'material-ui/';

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

const Bio = React.createClass({
  render(){
    return  <div>
       <Paper style={containerStyle} zDepth={1}>
          <Paper style={imgContainer} zDepth={0}>
            <div>
              <Avatar
                src={this.props.avatarUrl}
                size={230}
                style={avStyle}
                />
            </div>
          </Paper>

          <div>
            <h1>{`${this.props.firstName} ${this.props.lastName}`}</h1>
            <h3>Hometown: {this.props.hometown}</h3>
            <h3>Age: {this.props.age}</h3>
          </div>
        </Paper>
      </div>
  }
});

export default Bio;
