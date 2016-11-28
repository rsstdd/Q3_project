// import React from 'react';
//
// const App = React.createClass({
//   render() {
//     return <h1>Hello world</h1>;
//   }
// });
//
// export default App;
import Header from './Header';

import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Header />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
