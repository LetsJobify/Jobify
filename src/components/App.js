import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchPage } from '../actions/actions';

import { useColorMode } from '@chakra-ui/react';
import Nav from './Nav';
import Home from './Home';
import Register from './Register';
import Data from './Aggregate';

export const GlobalStateContext = React.createContext();

export default function App() {
  const loggedInStatus = useSelector((state) => state.loginStatus.loggedIn);
  const currentPage = useSelector((state) => state.currentPage);
  const setCurrentPage = (pageToSwitchTo) => {
    useDispatch(switchPage(pageToSwitchTo));
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');

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
