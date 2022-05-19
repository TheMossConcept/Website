import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4467C1',
      transparent: 'rgba(68, 103, 193, 0.75)'
    }
  },
  typography: {
    body1: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '120%',
      letterSpacing: '0.5px'
    },
    h1: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 105,
      lineHeight: '110%'
    },
    h2: {
      fontFamily: 'Tobias',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 105,
      lineHeight: '100%'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
