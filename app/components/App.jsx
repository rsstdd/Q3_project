import Header from './Header';
import Main from './Main';
import { BrowserRouter } from 'react-router';
// import Footer from './Footer';


import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <BrowserRouter >
    <div>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default App;
