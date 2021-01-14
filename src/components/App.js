import React, { useState, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';

// Import the necessary components to display inside of React-Router Switch logic.
import Nav from './Nav';
import Home from './Home';
import Register from './Register';
import Aggregate from './Aggregate';
<<<<<<< HEAD
import Slack from './bulletinBoard'
=======
>>>>>>> WedEvening

// Define a global state solution.
export const GlobalStateContext = React.createContext();

export default function App() {
  // Importing Light and Dark mode for application.
  const { colorMode, toggleColorMode } = useColorMode();

  // Who is the current user?
<<<<<<< HEAD
  const [ currentUser, setCurrentUser ] = useState('');
  const [ currentUserId, setCurrentUserId ] = useState('');
=======
  const [currentUser, setCurrentUser] = useState('');
>>>>>>> WedEvening

  // If the user is authenticated, render the Home.js component.
  // Otherwise, we need to render the Register.js component to allow them to register/sign in.
  const [loggedIn, setLogin] = useState(false);

  // Because React Router is not fucking working, fuck it, we'll do it live.
  const [ currentPage, setCurrentPage ] = useState('Home');

  // Define the values that will go into the Global State Context.
  const GlobalStateValue = {
    colorMode,
    toggleColorMode,
    loggedIn,
    setLogin,
    currentUser,
    setCurrentUser,
<<<<<<< HEAD
    currentUserId,
    setCurrentUserId,
    currentPage,
    setCurrentPage
=======
>>>>>>> WedEvening
  };

  return (
    <GlobalStateContext.Provider value={GlobalStateValue}>
<<<<<<< HEAD
      {loggedIn ? (
        <>
          {currentPage === 'Home' && (
            <>
              <Nav />
              <Home />
            </>
          )}
          {currentPage === 'Aggregate' && (
            <>
              <Nav />
              <Aggregate />
            </>
          )}
          {currentPage === 'Slack' && (
            <>
              <Nav />
              <Slack />
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
=======
      <div>
        <Router>
          <Nav />
          <Switch>
            {/* Login/Register OR Home */}
            {loggedIn ? (
              <Route exact path="/" component={Aggregate} />
            ) : (
              // <Route exact path="/Aggregate" component="Aggregate"/>
              <Route exact path="/" component={Register} />
            )}

            {/* <Route exact path="/Bulletin" component={Bulletin} />
            <Route exact path="/Fun" component={Fun} /> */}
          </Switch>
        </Router>
      </div>
>>>>>>> WedEvening
    </GlobalStateContext.Provider>
  );
}
