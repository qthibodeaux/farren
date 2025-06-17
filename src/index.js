import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // For basic body styles and global resets
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Resets CSS for Material Design

const theme = createTheme({
  palette: {
    mode: 'light', // Set default mode to dark for backgrounds/text
    primary: {
      main: '#38006B', // Dark Purple
      light: '#f1e1fa', // Light Purple
      dark: '#1A0033', // Even darker purple for deeper shadows/accents
    },
    secondary: {
      main: '#FFB300', // Dark Gold
      light: '#FFD54F', // Light Gold
      dark: '#CC8C00', // Darker Gold for hover/active states
    },
    background: {
      default: '#cccccc', // Dark Grey (for overall body background)
      paper: '#dddddd',   // Slightly lighter Dark Grey (for cards/Paper components)
    },
    text: {
      primary: '#1A0033', // Off-white for general text on dark backgrounds
      secondary: '#B0B0B0', // Lighter grey for secondary text on dark backgrounds
      // Custom property for text on light grey/white backgrounds
      darkOnLight: '#333333', // Very dark grey/black for text on light backgrounds
      lightOnDark: '#E0E0E0', // Explicitly define light text for dark backgrounds if needed
    },
    // Custom color for Light Grey sections
    lightGreySection: '#e5e5e5', // Light Grey
    white: '#FFFFFF', // Pure white
    black: '#000000', // Pure black
  },
  typography: {
    fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 900,
      lineHeight: 1.2,
      letterSpacing: '0.005em',
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 700,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 700,
          borderRadius: '8px',
          padding: '10px 20px',
        },
        containedPrimary: {
          color: '#E0E0E0', // Light text on Dark Purple button
        },
        containedSecondary: {
          color: '#333333', // Dark text on Dark Gold button
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#38006B', // Dark Purple for AppBar
          color: '#E0E0E0', // Light text
        }
      }
    },
    MuiToolbar: {
        styleOverrides: {
            root: {
                minHeight: '64px',
            }
        }
    },
    MuiTabs: {
        styleOverrides: {
            root: {
                backgroundColor: '#1C1C1C', // Retain a slightly lighter dark for tabs if separate
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }
        }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#B0B0B0',
          '&.Mui-selected': {
            color: 'secondary.main', // Dark Gold for selected tab
          },
        },
        indicator: {
          backgroundColor: 'secondary.main', // Dark Gold indicator
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#212121', // Dark Grey for Paper components
          color: 'text.primary', // Light text
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)', // Darker shadow for dark mode
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          backgroundColor: '#212121', // Dark Grey for Cards
          color: 'text.primary',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#212121', // Dark Grey for Accordion
          color: 'text.primary',
          border: '1px solid rgba(255,255,255,0.1)',
          '&.Mui-expanded': {
            backgroundColor: '#282828', // Slightly lighter when expanded
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.05)',
          },
        },
        content: {
          color: 'text.primary',
        },
        expandIconWrapper: {
          color: 'text.secondary',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#B0B0B0', // Light grey for label in dark mode
          },
          '& .MuiInputBase-input': {
            color: '#E0E0E0', // Light text for input
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,255,255,0.3)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.light', // Light Purple hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'secondary.main', // Dark Gold focus
          },
        },
      },
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                backgroundColor: 'rgba(255,255,255,0.1)', // Lighter divider for dark background
            }
        }
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);