import { createTheme } from '@mui/material';
import { purple, red, lime } from '@mui/material/colors';

const primaryColor = purple[600];
const secondaryColor = red[400];
const warningColor = lime[500];
const errorColor = red['A700'];

const customtheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    warning: {
      main: warningColor,
    },
    error: {
      main: errorColor,
    },
    components: {
      MuiFab: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
            BackgroundColor: 'red',
          },
        },
      },
    },
  },
});

export default customtheme;
