import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import 'vazir-font/dist/font-face.css'

// Create custom theme with Vazir font
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazir, Arial, sans-serif',
    h1: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
    h2: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
    h3: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
    h4: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
    h5: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
    h6: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
    body1: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
    body2: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
    button: {
      fontFamily: 'Vazir, Arial, sans-serif',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div dir="rtl">
          <App />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)