import React, { useState, useContext, useEffect } from 'react';
import { GlobalStateContext } from './App';
import {
  Box,
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  ChatIcon,
  CalendarIcon,
  MoonIcon,
  SunIcon,
  StarIcon
} from '@chakra-ui/icons';

export default function Nav() {
  const {
    colorMode,
    toggleColorMode,
    loggedIn,
    setLogin,
    currentUser,
    setCurrentUser,
  } = useContext(GlobalStateContext);

  return (
    <div>
      <Box bg={`${colorMode}.200`} pb="2">
        {loggedIn ? (
          <Button onClick={toggleColorMode} className="" ml="2" mr="2" mt="-1">
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
<<<<<<< HEAD
        ) : (
          <Button onClick={toggleColorMode} className="" ml="2" mr="2" mt="2">
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        )}

        {loggedIn ? (
          <div className="flex">
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<ChevronDownIcon />}
                mt="2"
                mr="2"
              >
                User
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    setLogin(false);
                    setCurrentUser('');
                  }}
                >
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
            <Router>
              <Link to="/">
                <Button mt="2" mr="2">
                  <CalendarIcon />
                </Button>
              </Link>

              <Link to="/bulletin">
                <Button mt="2" mr="2">
                  <ChatIcon />
                </Button>
              </Link>

              <Link to="/aggregate">
                <Button mt="2" mr="2">
                  Data
                </Button>
              </Link>

              <Link to="/fun">
                <Button mt="2" mr="2">
                  Fun
                </Button>
              </Link>
            </Router>
            <Box mr="3" mt="4">
              Signed in as: {currentUser}.
            </Box>
          </div>
        ) : (
          <span></span>
        )}
=======
          <Button 
            mt="2" 
            mr="2"
            onClick={() => setCurrentPage('Aggregate')}
          >
            <StarIcon />
          </Button>
          <Box mr="3" mt="4">
            <span className='bold' >Welcome back,</span> {currentUser}<span className='bold' >!</span>
          </Box>
        </div>
        : 
        <span></span>
        }
>>>>>>> 299d708f5f003d4e71ecfdd7812edf5c51fa13f1
      </Box>
    </div>
  );
}
