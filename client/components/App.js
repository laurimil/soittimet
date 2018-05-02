import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import {grey, amber, red, dark} from 'material-ui/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: grey,
    accent: amber,
    error: red,
    type: 'dark'
  }
});

import Header from './Header';

const App = (props) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Header />
      {props.children}
    </MuiThemeProvider>
  );
};

export default App;
