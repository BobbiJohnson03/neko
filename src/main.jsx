import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider, createTheme } from "@mui/material";
import '@fontsource/roboto-condensed/300.css';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/500.css';
import '@fontsource/roboto-condensed/700.css';



const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Condensed, Roboto, Arial, sans-serif', 
  },
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#000",
    },
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>
)

