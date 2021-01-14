import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './components/App';
import './stylesheets/styles.scss';

// Set color theme throughout application.
const colors = {
  light: {
    100: '#f4f4f2',
    200: '#e8e8e8',
    300: '#EDF5FA',
    400: '#D8E5EE',
    500: '#EDF5FA',
  },
  dark: {
    100: '#527296',
    200: '#213F6A',
    300: '#082149',
    400: '#54545E',
    500: '#0A1626',
  },
};

const theme = extendTheme({ colors });

render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
