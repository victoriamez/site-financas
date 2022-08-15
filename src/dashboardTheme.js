import { createTheme } from '@mui/material/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';



export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
    pallette: {
      primary: {
        main: '#5FFBF1'
      },
    },
    typography: {
      fontFamily: [
        'Encode Sans Expanded'
      ],
    },
  },
});
