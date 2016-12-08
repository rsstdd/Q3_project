import React from 'react';
import ReactDOM from 'react-dom';
// import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, FlatButton } from 'material-ui';

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
    iconElementRight={<FlatButton
      label="Log Out"
    />
  }

    </AppBar>
  </div>
);

export default Header;
