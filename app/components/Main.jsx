import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';

import { Match, Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 200,
  width: 1350,
  margin: 20,
  textAlign: 'center',
  // display: 'inline-block'
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const buttonWrapper = {
  height: 140,
  width: 500,
  margin: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const Main = React.createClass({
  getInitialState(){
    return {
      firstName: 'Ping Pong',
      lastName: 'Lady',
      email: 'grandmapingpong@gmail.com',
      password: '',
      age: '79',
      hometown: 'Cleveland',
      avatarUrl: 'http://www.imageno.com/image.php?id=9sixok6f6pew&kk=1237175343'
    }
  },

  getNewUserInfo(user) {
    this.setState ({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      age: user.age,
      hometown: user.hometown,
      avatarUrl: user.avatarUrl
    })

  },


  render(){ return (
    <main>
      <Match pattern="/signup" render={
        () => <SignUp
          getNewUserInfo={this.getNewUserInfo}
        />

      }/>
      <Match pattern="/signin" component={SignIn} />
      <Match pattern="/profile" render={
        () => <Profile
            {...this.state}
          />

      }/>

      <Match pattern="/" exactly render={
        () =>  <div>
          <Paper
          style={style} zDepth={1}
          >
            <div>
              <div>
                <h2>Keep track of stats. Create an Account or Sign In to get started...</h2>
              </div>
            </div>

              <Paper
              style={buttonWrapper} zDepth={1}
              >


                <div>
                  <Link to='/signup'>
                    <RaisedButton label="Create Account" />
                  </Link>
                </div>
                <br />
                <div>
                  <Link to='/signin'>
                    <RaisedButton label="Sign In" />
                  </Link>
                </div>

                </Paper>

            </Paper>
          </div>
      }/>
    </main>
    );
  }
})




export default Main;
