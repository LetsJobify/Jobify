import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useColorMode } from '@chakra-ui/react';
import Nav from './Nav';
import Home from './Home';
import Register from './Register';
import Data from './Aggregate';

export const GlobalStateContext = React.createContext();

export default function App() {
  const loggedInStatus = useSelector((state) => state.loginStatus.loggedIn);

  const { colorMode, toggleColorMode } = useColorMode();
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');
  const [currentPage, setCurrentPage] = useState('Home');

  const GlobalStateValue = {
    colorMode,
    toggleColorMode,
    loggedInStatus,
    currentUser,
    setCurrentUser,
    currentUserId,
    setCurrentUserId,
    currentPage,
    setCurrentPage,
  };

  return (
    <GlobalStateContext.Provider value={GlobalStateValue}>
      {loggedInStatus ? (
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
