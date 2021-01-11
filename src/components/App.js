import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
 } from 'react-router-dom';

 // Import the necessary components to display inside of React-Router Switch logic.
 import Nav from './Nav';
 import Home from './Home';
 import Register from './Register';


export default function App() {

  // If the user is authenticated, render the Home.js component.
  // Otherwise, we need to render the Register.js component to allow them to register/sign in.
  const [ loggedIn, setLogin ] = useState(false);

  return (
    <div>
      <Nav />
      <Router>
        <Switch>

          {/* Login/Register OR Home */}
          {loggedIn ? 
            <Route exact path="/" component={Home} /> : 
            <Route exact path="/" component={Register} />
          }


          {/* <Route exact path="/Bulletin" component={Bulletin} />
          <Route exact path="/Data" component={Data} />
          <Route exact path="/Fun" component={Fun} /> */}
        </Switch>
      </Router>
    </div>
  )
}
