"use client";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A1A1A', // Dark charcoal
    },
    secondary: {
      main: '#FFD700', // Gold
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0', // Light gray for secondary text
    },
    background: {
      default: '#1A1A1A',
      paper: '#2C2C2C', // Slightly lighter charcoal for paper elements
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 300,
    },
  },
});

export default theme;
