import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    primary: {
      main: '#2A7AE4',
      light: '#6BD1FF',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
