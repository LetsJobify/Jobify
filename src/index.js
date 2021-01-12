import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './components/App';
import './stylesheets/styles.scss';

// Set color theme throughout application.
const colors = {
  light: {
    100: '#EDF5FA',
    200: '#D8E5EE',
    300: '#C3D5E1',
    400: '#ADC5D5',
    500: '#154B6F',
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
