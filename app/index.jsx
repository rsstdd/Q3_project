import App from './components/App';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {blue700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: blue700,
  },
  appBar: {
    height: 50,
    color: blue700,
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
