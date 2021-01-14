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
      </Box>
    </div>
  );
}
