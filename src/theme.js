import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // A light blue, good for accents in a dark theme
    },
    secondary: {
      main: '#f48fb1', // A light pink, for other accents
    },
    background: {
      default: '#121212', // A standard dark background
      paper: '#1e1e1e',   // A slightly lighter background for surfaces like cards
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    // ... you can define more typography styles here
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(30, 30, 30, 0.8)', // Semi-transparent app bar
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default theme;
