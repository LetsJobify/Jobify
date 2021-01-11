import React from 'react';
import { render } from 'react-dom';
import { 
  ChakraProvider,
  extendTheme
 } from '@chakra-ui/react';
import App from './components/App';
import './stylesheets/styles.scss';

// Set color theme throughout application.
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>, 
  document.getElementById('root')
);