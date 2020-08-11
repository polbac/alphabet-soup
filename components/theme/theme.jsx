import { ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
  colors: {
    primary: '#E08DAC',
    secondary: '#6A7FDB',
    tertiary: '#57E2E5',
    fourth: '#45CB85',
    white: '#ffffff',
    black: '#000000',
  },
};

export const Theme = ({ children }) => (<ThemeProvider theme={theme}>{children}</ThemeProvider>);