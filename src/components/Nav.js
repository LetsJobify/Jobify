import React, { useState } from 'react';
import { 
  Box,
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
 } from '@chakra-ui/react';
 import {
   ChevronDownIcon,
   MoonIcon,
   SunIcon,
 } from '@chakra-ui/icons';
 import { 
  BrowserRouter as Router,
  Link,
 } from 'react-router-dom';

export default function Nav() {

  // Importing Light and Dark mode for application.
  const { colorMode, toggleColorMode } = useColorMode();

  return (

  <div>
    <Box 
      bg={`${colorMode}.200`}
      pb='2'
    >
      <Button 
        onClick={toggleColorMode}
        className=''
        ml='2'
        mr='2'
        mt='-1'
      >
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    
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
            <MenuItem>Sign Out</MenuItem> 
          </MenuList>
        </Menu>

        <Router>
          <Link to="/Home">
            <Button
              mt='2'
              mr='2'
            >
              Home
            </Button>
          </Link>

          <Link to="/Bulletin">
            <Button
              mt='2'
              mr='2'
            >
              Bulletin
            </Button>
          </Link>  

          <Link to="/Data">
            <Button
              mt='2'
              mr='2'
            >
              Data
            </Button>
          </Link>

          <Link to="/Fun">
            <Button
              mt='2'
              mr='2'
            >
              Fun
            </Button>
          </Link>
        </Router>
      </div>

    </Box>
  </div>
  return (

  <div>
    <Box 
      bg={`${colorMode}.200`}
      pb='2'
    >
      <Button 
        onClick={toggleColorMode}
        className=''
        ml='2'
        mr='2'
        mt='-1'
      >
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    
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
            <MenuItem>Sign Out</MenuItem> 
          </MenuList>
        </Menu>

        <Router>
          <Link to="/Home">
            <Button
              mt='2'
              mr='2'
            >
              Home
            </Button>
          </Link>

          <Link to="/Bulletin">
            <Button
              mt='2'
              mr='2'
            >
              Bulletin
            </Button>
          </Link>  

          <Link to="/Data">
            <Button
              mt='2'
              mr='2'
            >
              Data
            </Button>
          </Link>

          <Link to="/Fun">
            <Button
              mt='2'
              mr='2'
            >
              Fun
            </Button>
          </Link>
        </Router>
      </div>

    </Box>
  </div>
  )
}
