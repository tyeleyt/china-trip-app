import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Pages
import Home from './pages/Home';
import XiAn from './pages/XiAn';
import Budget from './pages/Budget';
import Phrases from './pages/Phrases';

// Chinese Theme (Red & Gold)
const theme = createTheme({
  palette: {
    primary: { 
      main: '#DC143C', // Chinese Red
      light: '#FF6B6B',
      dark: '#A00000',
    },
    secondary: { 
      main: '#FFD700', // Gold
      light: '#FFE55C',
      dark: '#C5A000',
    },
    background: { 
      default: '#FFF8F0', // Cream
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/china-trip-app">
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/xian" element={<XiAn />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/phrases" element={<Phrases />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;