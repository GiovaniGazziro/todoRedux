import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {Provider} from "react-redux";
import store from "./store";

import App from './App';


const theme = createMuiTheme({
  palette: {
    primary: {
    // light: will be calculated from palette.primary.main,
      main: '#AAD4FF',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#C4E2FF',
      main: '#668CB3',
      // eslint-disable-next-line indent
    // dark: will be calculated from palette.secondary.main,
      contrastText: '#B38F54',
    },
    // error: will use the default color
  },
});


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,

  document.getElementById('root'),
);

