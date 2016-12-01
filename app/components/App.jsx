import { BrowserRouter } from 'react-router';
import Header from './Header';
import Main from './Main';
// import Footer from './Footer';

import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = React.createClass({
  getInitialState() {
    return {
      isLoggedIn: false
    };
  },

  componentDidMount() {
    axios.get('/api/token')
      .then((res) => {
        // console.log(res.data);
        this.setState({ isLoggedIn: res.data });
      })
      .catch((err) => {
        this.setState({ loadErr: err });
      });
  },

  authUser(bool) {
    this.setState({ isLoggedIn: bool});
  },

  render() {
    return (
      <BrowserRouter >
        <div>
          <Header />
          <main className="main">
            {this.state.loggedIn ? <redirect to="/profile" /> : <Main />}
          </main>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
});
export default App;
