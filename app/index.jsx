import App from './components/App';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
