import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  ChakraProvider,
  extendTheme as chakraExtendTheme,
} from '@chakra-ui/react';
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme as muiCreateTheme,
  THEME_ID,
} from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import App from './App.jsx'

const chakraTheme = chakraExtendTheme();

const materialTheme = muiCreateTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme} resetCSS>
      <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
        <App />
      </MaterialThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
