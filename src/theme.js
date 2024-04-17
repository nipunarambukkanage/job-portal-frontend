import { createTheme } from '@material-ui/core/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change primary color
    },
    secondary: {
      main: '#dc004e', // Change secondary color
    },
  },
  typography: {
    fontFamily: [
      'Roboto', // Specify default font family
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
