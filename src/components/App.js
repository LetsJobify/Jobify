import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';

// Import the necessary components to display inside of React-Router Switch logic.
import Nav from './Nav';
import Home from './Home';
import Register from './Register';
import Aggregate from './Aggregate';

// Define a global state solution.
export const GlobalStateContext = React.createContext();

export default function App() {
  // Importing Light and Dark mode for application.
  const { colorMode, toggleColorMode } = useColorMode();

  // Who is the current user?
  const [currentUser, setCurrentUser] = useState('');

  // If the user is authenticated, render the Home.js component.
  // Otherwise, we need to render the Register.js component to allow them to register/sign in.
  const [loggedIn, setLogin] = useState(false);

  // Define the values that will go into the Global State Context.
  const GlobalStateValue = {
    colorMode,
    toggleColorMode,
    loggedIn,
    setLogin,
    currentUser,
    setCurrentUser,
  };

  return (
    <GlobalStateContext.Provider value={GlobalStateValue}>
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
    </GlobalStateContext.Provider>
  );
}
