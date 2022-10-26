/**
 * file: config/theme.js
 * description: file responsible for creating the 'theme' configuration
 * data: 10/25/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
