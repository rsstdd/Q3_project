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
      title="PingPongThing"
      showMenuIconButton={false}
    >
    <Tabs>
        {/* <Tab label="logOut"
        logOut={this.props.logOut}
         /> */}
        {/* <Tab label="Item 1" />
        <Tab labfel="Item 1" /> */}
      </Tabs>
    </AppBar>
  </div>
);

export default Header;
