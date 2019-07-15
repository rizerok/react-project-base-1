import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({});

const MuiProvider = ({ children }) => <ThemeProvider
  theme={theme}
>
  {children}
</ThemeProvider>;

export default MuiProvider;
