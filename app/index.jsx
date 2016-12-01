import App from './components/App';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {lightGreen900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: lightGreen900,
  },
  appBar: {
    height: 50,
    color: lightGreen900,
  },
});

ReactDOM.render(

    <MuiThemeProvider muiTheme={muiTheme}>
      <App
      // muiTheme={muiTheme}
      />
    </MuiThemeProvider>,

  document.getElementById('app')
);
