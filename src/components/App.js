import React, { useState, useEffect } from 'react';
import { useColorMode, Image } from '@chakra-ui/react';

// Import the necessary components to display inside of React-Router Switch logic.
import Nav from './Nav';
import Home from './Home';
import Register from './Register';
import Data from './Aggregate';

// Define a global state solution.
export const GlobalStateContext = React.createContext();

export default function App() {
  // Importing Light and Dark mode for application.
  const { colorMode, toggleColorMode } = useColorMode();

  // Who is the current user?
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');

  // If the user is authenticated, render the Home.js component.
  // Otherwise, we need to render the Register.js component to allow them to register/sign in.
  const [loggedIn, setLogin] = useState(false);

  // Because React Router is not fucking working, fuck it, we'll do it live.
  const [currentPage, setCurrentPage] = useState('Home');

  // Define the values that will go into the Global State Context.
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
