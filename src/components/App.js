import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import { useColorMode } from '@chakra-ui/react';
import Nav from './Nav';
import Home from './Home';
import Register from './Register';
import Data from './Aggregate';

export const GlobalStateContext = React.createContext();

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');
  const [loggedIn, setLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const GlobalStateValue = {
    colorMode,
    toggleColorMode,
    loggedIn,
    setLogin,
    currentUser,
    setCurrentUser,
    currentUserId,
    setCurrentUserId,
    currentPage,
    setCurrentPage,
  };

  return (
    <GlobalStateContext.Provider value={GlobalStateValue}>
      {loggedIn ? (
        <>
          {currentPage === 'Home' && (
            <>
              <Nav />
              <Home />
            </>
          )}
          {currentPage === 'Data' && (
            <>
              <Nav />
              <Data />
            </>
          )}
        </>
      ) : (
        <>
          {currentPage === 'Home' && (
            <>
              <Nav />
              <Register />
            </>
          )}
        </>
      )}
    </GlobalStateContext.Provider>
  );
}
