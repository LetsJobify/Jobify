import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './stylesheets/styles.scss';

const applicationColors = {
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
const totalApplicationTheme = extendTheme({ applicationColors });

render(
  <Provider store={store}>
    <ChakraProvider theme={totalApplicationTheme}>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
