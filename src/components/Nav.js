import React, { useState, useContext, useEffect } from 'react';
import { logoutUser } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateContext } from './App';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  CalendarIcon,
  MoonIcon,
  SunIcon,
  StarIcon,
} from '@chakra-ui/icons';

export default function Nav() {
  const dispatch = useDispatch();
  const loggedInStatus = useSelector((state) => state.loginStatus.loggedIn);

  const {
    colorMode,
    toggleColorMode,
    currentUser,
    setCurrentUser,
    setCurrentUserId,
    setCurrentPage,
  } = useContext(GlobalStateContext);

  return (
    <div>
      <Box bg={`${colorMode}.200`} pb='2'>
        {loggedInStatus ? (
          <Button onClick={toggleColorMode} className='' ml='2' mr='2' mt='-1'>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        ) : (
          <Button onClick={toggleColorMode} className='' ml='2' mr='2' mt='2'>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        )}

        {loggedInStatus ? (
          <div className='flex'>
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<ChevronDownIcon />}
                mt='2'
                mr='2'
              >
                User
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    dispatch(logoutUser());
                    setCurrentUser('');
                    setCurrentUserId('');
                    setCurrentPage('Home');
                  }}
                >
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
            <Button mt='2' mr='2' onClick={() => setCurrentPage('Home')}>
              <CalendarIcon />
            </Button>
            <Button mt='2' mr='2' onClick={() => setCurrentPage('Data')}>
              <StarIcon />
            </Button>
            <Box mr='3' mt='4'>
              <span className='bold'>Welcome back,</span> {currentUser}
              <span className='bold'>!</span>
            </Box>
          </div>
        ) : (
          <span></span>
        )}
      </Box>
    </div>
  );
}
