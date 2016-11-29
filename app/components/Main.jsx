import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import SignUp from './SignUp';
import SignIn from './SignIn';

import { Match, Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';




const style = {
  height: 300,
  width: 1350,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',

};

const Main = () => (
  <main>
    <Match pattern="/signup" component={SignUp} />
    <Match pattern="/signin" component={SignIn} />
    <Match pattern="/" exactly render={
        () =>  <div>
            <Paper style={style} zDepth={1} >
              <div>
                <div>
                  <h3>Keep track of stats. Create an Account or Sign In to get started...</h3>
                </div>
              </div>
              <div>
              <Link to='/signup'>
                <RaisedButton label="Sign Up" />
              </Link>
              </div>
              <br />
              <div>
                <Link to='/signin'>
                  <RaisedButton label="Sign In" />
                </Link>
              </div>
            </Paper>
          </div>
    }/>

  </main>
);


export default Main;
