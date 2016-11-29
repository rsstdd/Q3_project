import React from 'react';
import ReactDOM from 'react-dom';
// import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Tab, Tabs} from 'material-ui';


// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };

const Header = () => (
  <div>
    <AppBar
      title="Ping Pong Blah"
      showMenuIconButton={false}
    >
      {/* <Tabs>
        <Tab label="Sign In" />
        <Tab label="Item 1" />
        <Tab label="Item 1" />
      </Tabs> */}
    </AppBar>
  </div>
);

export default Header;
